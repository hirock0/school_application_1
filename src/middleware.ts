import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //    if (request.nextUrl.pathname =='/admin/access') {
  //         return NextResponse.redirect(new URL('/admin/login', request.url))
  //    }
  //   if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  //   }
}

export const config = {
  matcher: ["/admin/login"],
};
