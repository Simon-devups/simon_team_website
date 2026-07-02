import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { identifier, password } = body;

        if (!identifier || !password) {
            return NextResponse.json(
                { error: 'لطفا تمام فیلد ها را وارد کنید' },
                { status: 400 }
            )
            // ۳. شبیه‌سازی یا برقراری ارتباط با بک‌اِند اصلی شما (مثلاً NestJS یا دیتابیس)
            // در این مرحله شما باید اطلاعات را به بک‌اِند بفرستید. برای نمونه:
            /*
            const backendRes = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier, password })
            });
            const backendData = await backendRes.json();
            */


        }
        if (password !== "1234") {
            return NextResponse.json(
                { error: 'رمز عبور وارد شده اشتباه است.' },
                { status: 401 }
            )
        }

        const response = NextResponse.json(
            { message: 'ورود با موفقیت انجام شد', user: { identifier } },
            { status: 200 }
        );

        // فرض می‌کنیم یک توکن فرضی به نام 'mock_token_xyz' داریم
        response.cookies.set({
            name: 'token',
            value: 'mock_token_xyz',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // فعال بودن SSL در پروداکشن
            sameSite: 'strict',
            path: '/',
            maxAge: 60*60*24*7 //haft rooz tarikh darad
        });
        return response;


    }

    catch(err){
        console.log('api login err' , err);
        return NextResponse.json(
            {error: 'خطای داخلی سرور رخ داده است'},
            {status: 500}
        )
    }
}