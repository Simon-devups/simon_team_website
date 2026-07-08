// app/api/upload/route.js
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: 'فایلی ارسال نشده' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // ساخت نام یکتا برای جلوگیری از تداخل نام فایل‌ها
        const ext = path.extname(file.name);
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;

        // مسیر پابلیک: public/uploads/portfolio
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'portfolio');
        const filePath = path.join(uploadDir, uniqueName);

        await writeFile(filePath, buffer);

        // آدرسی که کلاینت‌ها می‌تونن ازش عکس رو ببینن
        const publicUrl = `/uploads/portfolio/${uniqueName}`;

        return NextResponse.json({ url: publicUrl, name: file.name });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'خطا در آپلود فایل' }, { status: 500 });
    }
}