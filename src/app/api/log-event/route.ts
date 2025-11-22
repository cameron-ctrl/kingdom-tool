// src/app/api/log-event/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  ? process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n")
  : undefined;

// Top-level debug so we can see env status once on startup
console.log("[DEBUG_ENV_TOP]", {
  hasId: !!SPREADSHEET_ID,
  hasEmail: !!SERVICE_ACCOUNT_EMAIL,
  hasKey: !!SERVICE_ACCOUNT_KEY,
  keyPreview: SERVICE_ACCOUNT_KEY?.slice(0, 30),
});

if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !SERVICE_ACCOUNT_KEY) {
  console.warn(
    "[log-event] Google Sheets env vars not fully set; will only log to console."
  );
}

let sheetsClient: ReturnType<typeof google.sheets> | null = null;

async function getSheetsClient() {
  if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !SERVICE_ACCOUNT_KEY) {
    console.warn("[log-event] Missing Sheets env vars at runtime", {
      hasId: !!SPREADSHEET_ID,
      hasEmail: !!SERVICE_ACCOUNT_EMAIL,
      hasKey: !!SERVICE_ACCOUNT_KEY,
    });
    return null;
  }

  if (sheetsClient) return sheetsClient;

  // Use GoogleAuth with explicit credentials instead of JWT + authorize()
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: SERVICE_ACCOUNT_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  sheetsClient = sheets;
  return sheetsClient;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      eventType,
      page,
      label,
      value,
      metadata,
    }: {
      eventType?: string;
      page?: string;
      label?: string;
      value?: string;
      metadata?: Record<string, unknown>;
    } = body ?? {};

    if (!eventType || !page || !label) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const pagePath = page;
    const referer = req.headers.get("referer") ?? "";
    const userAgent = req.headers.get("user-agent") ?? "";

    // We'll fill these in more later if needed
    const sessionId = "";
    const utm_source =
      (metadata && (metadata["utm_source"] as string | undefined)) ?? "";
    const utm_medium =
      (metadata && (metadata["utm_medium"] as string | undefined)) ?? "";

    const eventForLog = {
      timestamp,
      eventType,
      eventLabel: label,
      value: value ?? "",
      pagePath,
      referer,
      userAgent,
      sessionId,
      utm_source,
      utm_medium,
    };

    // Always log to server console for debugging
    console.log("[EVENT]", eventForLog);

    // Try to write to Google Sheets if configured
    const sheets = await getSheetsClient();

    if (sheets && SPREADSHEET_ID) {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: "Sheet1!A:J", // change "Sheet1" if your tab is named differently
          valueInputOption: "RAW",
          requestBody: {
            values: [
              [
                timestamp,
                eventType,
                label,
                value ?? "",
                pagePath,
                referer,
                userAgent,
                sessionId,
                utm_source,
                utm_medium,
              ],
            ],
          },
        });
      } catch (sheetError) {
        console.error("[EVENT_SHEETS_ERROR]", sheetError);
        // We don't throw here; we still return ok so the UX isn't affected.
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[EVENT_ERROR]", err);
    return NextResponse.json(
      { ok: false, error: "Invalid JSON or server error" },
      { status: 500 }
    );
  }
}