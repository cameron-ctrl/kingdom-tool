// src/app/api/log-event/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import {
  getSessionIdFromCookiesOrNew,
  SESSION_COOKIE_NAME,
} from '@/lib/session';

// Ensure Node runtime for googleapis
export const runtime = 'nodejs';

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const RAW_PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

// Normalize private key line breaks (Vercel stores them with \n)
const PRIVATE_KEY = RAW_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
  // This will show up in Vercel logs if misconfigured
  console.error('Missing Google Sheets environment variables.');
}

// Set up JWT auth
const jwtClient =
  SERVICE_ACCOUNT_EMAIL && PRIVATE_KEY
    ? new google.auth.JWT(
        SERVICE_ACCOUNT_EMAIL,
        undefined,
        PRIVATE_KEY,
        ['https://www.googleapis.com/auth/spreadsheets']
      )
    : null;

// Sheets client
const sheets = jwtClient
  ? google.sheets({ version: 'v4', auth: jwtClient })
  : null;

type LogEventArgs = {
  eventType: string;
  page: string;
  label: string;
  value?: string;
  metadata?: Record<string, unknown>;
};

export async function POST(req: NextRequest) {
  try {
    if (!sheets || !jwtClient || !SPREADSHEET_ID) {
      console.error('Google Sheets client not initialized.');
      return NextResponse.json(
        { error: 'Google Sheets not configured' },
        { status: 500 }
      );
    }

    const body = (await req.json()) as LogEventArgs;

    // Basic validation to avoid junk rows
    if (!body.eventType || !body.page || !body.label) {
      return NextResponse.json(
        { error: 'Invalid payload' },
        { status: 400 }
      );
    }

    // SESSION HANDLING
    const cookieHeader = req.headers.get('cookie');
    const { sessionId, isNew } = await getSessionIdFromCookiesOrNew(
      cookieHeader
    );

    const timestamp = new Date().toISOString();

    // Console logging (kept as you described)
    console.log('Analytics event', {
      ...body,
      sessionId,
      timestamp,
    });

    // Prepare the row to append.
    // You can match these columns to your sheet:
    // A: timestamp
    // B: sessionId
    // C: eventType
    // D: page
    // E: label
    // F: value
    // G: metadata (JSON)
    const row = [
      timestamp,
      sessionId,
      body.eventType,
      body.page,
      body.label,
      body.value ?? '',
      body.metadata ? JSON.stringify(body.metadata) : '',
    ];

    await jwtClient.authorize(); // ensure token is fresh

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:G', // <-- update to your actual sheet name/range
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });

    // Build response and set the session cookie if this is a new session
    const res = NextResponse.json({ ok: true });

    if (isNew) {
      res.cookies.set(SESSION_COOKIE_NAME, sessionId, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }

    return res;
  } catch (err) {
    console.error('Error in /api/log-event', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
