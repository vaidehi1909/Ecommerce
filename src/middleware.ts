import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib";

export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //validate the user is authenticated
    const session = await getSession(request);
    if (!session)  // redirect if the token is invalid
      return NextResponse.redirect(new URL('/', request.nextUrl.origin))
  } else if (request.nextUrl.pathname === '/') {
    const session = await getSession(request);
    if (session)
      return NextResponse.redirect(new URL('/dashboard', request.nextUrl.origin))
  }
}
