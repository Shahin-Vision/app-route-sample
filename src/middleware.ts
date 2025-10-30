import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (
    url.pathname.startsWith("/login") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  const loggedIn = request.cookies.get("user");

  if (!loggedIn) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
