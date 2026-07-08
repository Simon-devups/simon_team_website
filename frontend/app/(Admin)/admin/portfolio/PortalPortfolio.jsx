'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/portfolio.module.css';
import { toast } from 'sonner';

export default function PortalPortfolio({ onClose }) {
    const [images, setImages] = useState([]); // [{url, name}, ...]
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        clientName: '',
        projectUrl: '',
        shortDescription: '',
        description: '',
        technologies: '',
        projectDuration: '',
        projectDate: '',
        status: 'PUBLISHED',
    });

    const portalRoot = typeof document !== 'undefined'
        ? document.getElementById('portal-root')
        : null;
    if (!portalRoot) return null;

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // آپلود فایل انتخاب‌شده به API و افزودن آدرس به لیست عکس‌ها
    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setUploading(true);
        try {
            const uploadedImages = await Promise.all(
                files.map(async (file) => {
                    const fd = new FormData();
                    fd.append('file', file);

                    const res = await fetch('/api/upload', {
                        method: 'POST',
                        body: fd,
                    });

                    if (!res.ok) throw new Error('آپلود ناموفق بود');

                    const data = await res.json();
                    return { url: data.url }; // ساختاری که بک‌اند انتظار داره: {"url": string}
                })
            );

            setImages((prev) => [...prev, ...uploadedImages]);
        } catch (err) {
            console.error(err);
            toast.error('خطا در آپلود یک یا چند عکس');
        } finally {
            setUploading(false);
        }
    };

    const removeImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    // ارسال نهایی فرم به بک‌اند
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            images, // [{url: string}, ...]
        };

        try {
            const res = await fetch('http://localhost:3000/portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('ثبت نمونه کار ناموفق بود');

            onClose();
        } catch (err) {
            console.error(err);
            toast.error('خطا در ثبت نمونه کار');
        }
    };

    return createPortal(
        <div className={styles.portalOverlay}>
            <form className={styles.portalContent} onSubmit={handleSubmit}>
                <h2 style={{ color: '#3b82f6' }}>ایجاد نمونه کار جدید</h2>
                <button type="button" className={styles.close} onClick={onClose}>&#10005;</button>

                <div>عنوان نمونه کار</div>
                <input
                    className={styles.inputs}
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <div>متن توضیحی نمونه کار</div>
                <textarea
                    className={styles.inputs}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                {/*
                    ویژگی‌های نمونه کار
                    فعلاً استاتیک است و به state متصل نیست، چون ساختار داده مربوط به "ویژگی‌ها"
                    هنوز در مدل دیتابیس و API پیاده‌سازی نشده.
                    وقتی فیلد مربوطه (مثلاً features: string[]) به بک‌اند و اسکیمای پورتفولیو اضافه شد،
                    این اینپوت‌ها باید به state متصل شوند و به‌صورت داینامیک (امکان افزودن/حذف ردیف) دربیایند.
                */}
                <div>ویژگی های نمونه کار</div>
                <div className={styles.sixGrid}>
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                </div>

                {/*
                    پالت رنگی نمونه کار
                    مشابه بالا - فعلاً استاتیک است چون ساختار "پالت رنگی" هنوز در بک‌اند
                    (مدل Prisma / DTO ثبت پورتفولیو) تعریف نشده. بعد از اضافه شدن فیلد مربوطه
                    (مثلاً colors: string[])، این ردیف باید داینامیک شود (تعداد رنگ‌ها متغیر باشد)
                    و به state formData متصل شود تا در payload نهایی ارسال گردد.
                */}
                <div>پالت های رنگی نمونه کار</div>
                <div className={styles.threeGrid}>
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                </div>

                <div>عکس صفحات نمونه کار</div>
                <div className={styles.threeGrid}>
                    <label
                        htmlFor="page"
                        style={{
                            position: 'static',
                            textAlign: 'center',
                            width: '150px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        className={styles.createNew}
                    >
                        {uploading ? 'در حال آپلود...' : 'انتخاب فایل'}
                    </label>
                    <input
                        style={{ display: 'none' }}
                        className={styles.inputs}
                        type="file"
                        name="pages"
                        id="page"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        disabled={uploading}
                    />
                </div>

                {/* پیش‌نمایش عکس‌های آپلودشده */}
                {images.length > 0 && (
                    <div className={styles.threeGrid}>
                        {images.map((img, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <img
                                    src={img.url}
                                    alt={`preview-${i}`}
                                    style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: 8 }}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(i)}
                                    style={{ position: 'absolute', top: 2, right: 2 }}
                                >
                                    &#10005;
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <input
                    style={{ bottom: '15px', left: '15px', top: 'unset' }}
                    className={styles.createNew}
                    type="submit"
                    value="افزودن نمونه کار"
                    disabled={uploading}
                />
            </form>
        </div>,
        portalRoot
    );
}