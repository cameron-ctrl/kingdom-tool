// src/lib/session.ts

export const SESSION_COOKIE_NAME = 'sessionId';

// Parse a cookie header string into a map.
function parseCookieHeader(
  cookieHeader: string | null | undefined
): Record<string, string> {
  const result: Record<string, string> = {};
  if (!cookieHeader) return result;

  const parts = cookieHeader.split(';');
  for (const part of parts) {
    const [rawName, ...rest] = part.split('=');
    if (!rawName) continue;
    const name = rawName.trim();
    const value = rest.join('=').trim();
    if (!name) continue;
    result[name] = decodeURIComponent(value || '');
  }
  return result;
}

// Generate a reasonably unique session ID.
export function generateSessionId(): string {
  // Prefer crypto.randomUUID when available
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  // Fallback (e.g. older environments)
  return (
    Math.random().toString(36).slice(2) + '-' + Date.now().toString(36)
  );
}

/**
 * Get a sessionId from a cookie header if present, otherwise generate a new one.
 * Returns the id and whether it's newly generated (so the caller can set a cookie).
 */
export async function getSessionIdFromCookiesOrNew(
  cookieHeader: string | null | undefined
): Promise<{ sessionId: string; isNew: boolean }> {
  const cookies = parseCookieHeader(cookieHeader);
  const existing = cookies[SESSION_COOKIE_NAME];

  if (existing) {
    return { sessionId: existing, isNew: false };
  }

  const sessionId = generateSessionId();
  return { sessionId, isNew: true };
}