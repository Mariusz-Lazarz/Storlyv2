import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (req.nextUrl.pathname === "/profile" && !req.auth) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
