import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // ✅ Allow these paths without authentication
  if (
    url.pathname.startsWith("/login") ||
    url.pathname.startsWith("/categories") ||  // ← Category pages (plural)
    url.pathname.startsWith("/category") ||    // ← Just in case (singular)
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // ✅ Check if user is logged in
  const loggedIn = request.cookies.get("user");

  if (!loggedIn) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}