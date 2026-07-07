import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: 'لطفا تمام فیلد ها را وارد کنید' },
                { status: 400 }
            )
        }

        // ارسال درخواست به بک‌اند NestJS
        const backendRes = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const backendData = await backendRes.json();

        if (!backendRes.ok) {
            return NextResponse.json(
                { error: backendData.message || 'خطا در ورود' },
                { status: backendRes.status }
            )
        }

        // بک‌اند اکنون { access_token: "..." } برمی‌گرداند
        const token = backendData?.access_token;

        if (!token) {
            return NextResponse.json(
                { error: 'توکن دریافت نشد' },
                { status: 500 }
            )
        }

        const response = NextResponse.json(
            { message: 'ورود با موفقیت انجام شد', token },
            { status: 200 }
        );

        // ذخیره token در cookie
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60*60*24*7 // 7 روز
        });

        return response;

    }
    catch(err){
        console.log('api login err', err);
        return NextResponse.json(
            {error: 'خطای اتصال به سرور'},
            {status: 500}
        )
    }
}