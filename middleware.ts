import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { adminRoutes, publicRoutes, apiAuth } from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAdminRole = req.auth?.user?.role === "ADMIN";

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuth);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/products/");
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

  console.log(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAdminRoute && !isAdminRole) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (!isPublicRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
