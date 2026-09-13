import "server-only";
import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// 1. Add username to your payload type
type SessionPayload = {
  userId: string;
  username: string;
  expiresAt: Date;
};

// 2. Accept username when creating the session
export async function createSession(userId: string, username: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, username, expiresAt });

  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

// Ensure the JWT payload combines standard claims with your custom ones
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload; // Type casting for autocompletion
  } catch (error) {
    console.log("Failed to verify session");
    return null;
  }
}

// 3. Fix getSession to return the actual object instead of String()
export async function getSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  return await decrypt(sessionCookie);
}
