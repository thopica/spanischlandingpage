import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const LEGACY_CITY_PATH = /^\/spanisch-lernen-([a-z-]+)$/;

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const match = pathname.match(LEGACY_CITY_PATH);

  if (!match) return NextResponse.next();

  const citySlug = match[1];
  const target = request.nextUrl.clone();
  target.pathname = `/spanisch-lernen/${citySlug}`;
  target.search = search;

  return NextResponse.redirect(target, 308);
}

export const config = {
  matcher: ["/spanisch-lernen-:path*"],
};
