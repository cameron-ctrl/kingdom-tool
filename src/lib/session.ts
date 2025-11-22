// src/lib/session.ts
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

export function getSessionId() {
  const cookieStore = cookies();
  let id = cookieStore.get("sessionId")?.value;

  if (!id) {
    id = randomUUID();
    cookieStore.set("sessionId", id, { path: "/", httpOnly: false });
  }

  return id;
}