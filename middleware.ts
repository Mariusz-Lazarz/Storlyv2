import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { adminRoutes, publicRoutes, apiAuth } from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAdminRole = req.auth?.user?.role === "ADMIN";

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuth);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAdminRoute && !isAdminRole) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (!isPublicRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
