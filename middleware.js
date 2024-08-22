import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('authToken');

  if (!token) {
    // Redirect to login page if token is missing
    return NextResponse.redirect(new URL('/loginpg', request.url));
  }
  return NextResponse.next();
  
}
export const config = {
    matcher: ['/properties:path*'],
  };

