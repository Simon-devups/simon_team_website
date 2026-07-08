"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './StylesInComponents/requestformlit.module.css';
import { toast } from 'sonner';

const ConsultationFormlit = () => {
    const phoneRegex = /^09\d{9}$/;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [request, setRequest] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // اعتبارسنجی
        if (name.trim() === "") {
            toast.error("لطفاً نام خود را کامل وارد کنید");
            return;
        }
        else if (!phoneRegex.test(phone)) {
            toast.error("شماره تلفن را کامل و صحیح وارد کنید ");
            return;
        }
        else if (request.trim() === "") {
            toast.error("لطفاً متن درخواست خود را وارد کنید");
            return;
        }

        setLoading(true);
        try {
            // =====================================================
            // در حال حاضر API فقط فیلد "message" را قبول می‌کند
            // بنابراین همه اطلاعات را در یک رشته ترکیب می‌کنیم
            // =====================================================
            // const fullMessage = `نام: ${name}\nتلفن: ${phone}\nدرخواست: ${request}`;

            // =====================================================
            // برای آینده: اگر API فیلدهای جداگانه پشتیبانی کرد،
            // می‌توانید از این بخش استفاده کنید و خط بالا را کامنت کنید
            // =====================================================
            /*
            const requestBody = {
              name: name,
              phone: phone,
              request: request
            };
            */

            const res = await fetch('http://localhost:3000/consultation-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // حالا فقط message را ارسال می‌کنیم
                body: JSON.stringify({ message: request }),
                // برای آینده: اگر از body جداگانه استفاده کنید:
                // body: JSON.stringify(requestBody),
            });

            if (res.ok) {
                toast.success('درخواست شما با موفقیت ثبت شد');
                setName('');
                setPhone('');
                setRequest('');
            } else {
                const errorData = await res.json();
                toast.error(errorData.message || 'خطا در ثبت درخواست');
            }
        } catch (error) {
            toast.error('مشکل در ارتباط با سرور');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.consultationContainer}>
            <Image
                src="/Vector (1).svg"
                className={`${styles.bgShape} ${styles.patternRightTop}`}
                alt="پترن تزیینی راست"
                width={440}
                height={350}
                style={{ height: 'auto' }}
            />
            <Image
                src="/Vector (1).svg"
                className={`${styles.bgShape} ${styles.patternLeftBottom}`}
                alt="پترن تزیینی چپ"
                width={440}
                height={350}
                style={{ height: 'auto' }}
            />
            <Image
                src="/arroww (1).svg"
                className={styles.arrowGraphic}
                alt="فلش راهنما"
                width={35}
                height={35}
                style={{ height: 'auto' }}
            />

            <h2 className={styles.formTitle}>فرم درخواست مشاوره رایگان</h2>
            <p className={styles.formSubtitle}>
                تنها کافیست درخواست خود را از طریق فُرم زیر برای ما ارسال کنید در سریع‌ترین زمان کارشناسان ما با شما تماس می‌گیرند
            </p>

            <form className={styles.consultationForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="نام و نام خانوادگی ..."
                    />
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="tel"
                        placeholder="شماره تلفن همراه ..."
                    />
                </div>

                <textarea
                    onChange={(e) => setRequest(e.target.value)}
                    value={request}
                    placeholder="متن درخواست شما ..."
                    rows={4}
                ></textarea>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? 'در حال ارسال...' : 'ارسال درخواست'}
                </button>
            </form>
        </div>
    );
};

export default ConsultationFormlit;