// src/lib/logEvent.ts

// Generate a simple random session ID
function generateSessionId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function getSessionId() {
  if (typeof window === "undefined") return "";

  try {
    const existing = localStorage.getItem("session_id");
    if (existing) return existing;

    const newId = generateSessionId();
    localStorage.setItem("session_id", newId);
    return newId;
  } catch {
    return ""; // fail-safe
  }
}

type LogEventArgs = {
  eventType: string; // "response_choice", "click", "page_view"
  page: string;      // "/response", "/point/1"
  label: string;     // "response_button", "feedback_form_link"
  value?: string;
  metadata?: Record<string, unknown>;
};

export async function logEvent(args: LogEventArgs) {
  const sessionId = getSessionId();

  const payload = {
    ...args,
    sessionId,
  };

  try {
    await fetch("/api/log-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    console.error("logEvent error", err);
  }
}