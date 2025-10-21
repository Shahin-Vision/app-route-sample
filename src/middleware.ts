import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Request received :", request.url);

    const response = NextResponse.next()
    return response;
}