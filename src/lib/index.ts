import { User } from "@/types/user";
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "KwYkZ6dZFK0eXwXKQrF0nch3rt0"; // process.env.SECRET
const key = new TextEncoder().encode(secretKey);
export const EXPIRES_IN = 60 * 60 * 24 * 1000; // 24 hours

export async function encrypt({ user }: { user: User, expires: Date }) {
  return await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setSubject(user.id)
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function getSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {

  // Refresh the session so it doesn't expire
  const parsed = await getSession(request);
  parsed.expires = new Date(Date.now() + EXPIRES_IN);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
