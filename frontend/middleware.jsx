// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JSON_TOKEN_KEY);

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // فقط مسیرهای زیر /admin را بررسی کن
    if (pathname.startsWith('/admin')) {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        try {
            // فقط اعتبار امضا و انقضا چک می‌شود
            // (توکن فعلاً فیلد نقش ندارد، پس نمی‌توان ادمین بودن را دقیق تشخیص داد)
            await jwtVerify(token, secret);
            return NextResponse.next();

        } catch (err) {
            console.error('JWT verify error:', err.message);
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};