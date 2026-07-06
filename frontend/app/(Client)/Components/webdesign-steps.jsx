import React from 'react';
import Image from 'next/image';
import styles from './StylesInComponents/webdesign-steps.module.css';

const ProcessSteps = () => {
    const steps = [
        {
            id: 1,
            rowClass: styles.row1,
            alignClass: styles.alignRight,
            bgClass: styles.bgVector2,
            title: 'ارسال درخواست',
            desc: <>با ارسال درخواست، اولین قدم را برای راه‌اندازی سایت اختصاصی <br /> خود بردارید. تیم ما خیلی زود با شما تماس می‌گیرد.</>,
            arrowSrc: '/Vector (5).svg',
            arrowClass: styles.pathSegment,
            arrowAlt: 'مسیر زرد ۱'
        },
        {
            id: 2,
            rowClass: styles.row2,
            alignClass: styles.alignLeft,
            bgClass: styles.bgVector3,
            title: 'تماس کارشناسان',
            desc: 'کارشناسان ما پس از دریافت درخواست، برای نیازهای شما تماس می‌گیرند تا بهترین پیشنهادات را برای طراحی سایت‌تان ارائه کنند.',
            arrowSrc: '/مسیر-2 3.svg',
            arrowClass: styles.pathSegment2,
            arrowAlt: 'مسیر زرد ۲'
        },
        {
            id: 3,
            rowClass: styles.row3,
            alignClass: styles.alignRight,
            bgClass: styles.bgVector4,
            title: 'انجام بررسی‌های فنی',
            desc: 'تیم فنی آرکوب با بررسی همه‌جانبه اطلاعات، اطمینان می‌یابد که سایت شما بهینه، سریع و کاملاً سازگار با نیازهایتان باشد.',
            arrowSrc: '/مسیر-3 3.svg',
            arrowClass: styles.pathSegment3,
            arrowAlt: 'مسیر زرد ۳'
        },
        {
            id: 4,
            rowClass: styles.row4,
            alignClass: styles.alignLeft,
            bgClass: styles.bgVector3,
            title: 'تماس کارشناسان',
            desc: 'کارشناسان ما پس از دریافت درخواست، برای نیازهای شما تماس می‌گیرند تا بهترین پیشنهادات را برای طراحی سایت‌تان ارائه کنند.',
            arrowSrc: '/مسیر-4 3.svg',
            arrowClass: styles.pathSegment4,
            arrowAlt: 'مسیر زرد ۴'
        },
        {
            id: 5,
            rowClass: styles.row5,
            alignClass: styles.alignRight,
            bgClass: styles.bgVector4,
            title: 'انجام بررسی‌های فنی',
            desc: 'تیم فنی آرکوب با بررسی همه‌جانبه اطلاعات، اطمینان می‌یابد که سایت شما بهینه، سریع و کاملاً سازگار با نیازهایتان باشد.',
            arrowSrc: '/مسیر-5 3.svg',
            arrowClass: styles.pathSegment5,
            arrowAlt: 'مسیر زرد ۵'
        },
        {
            id: 6,
            rowClass: styles.row6,
            alignClass: styles.alignLeft,
            bgClass: styles.bgVector3,
            title: 'تماس کارشناسان',
            desc: 'کارشناسان ما پس از دریافت درخواست، برای نیازهای شما تماس می‌گیرند تا بهترین پیشنهادات را برای طراحی سایت‌تان ارائه کنند.',
            arrowSrc: '/مسیر-6 3.svg',
            arrowClass: styles.pathSegment6,
            arrowAlt: 'مسیر زرد ۶'
        },
        {
            id: 7,
            rowClass: '',
            alignClass: styles.alignRight,
            bgClass: styles.bgVector4,
            title: 'انجام بررسی‌های فنی',
            desc: 'تیم فنی آرکوب با بررسی همه‌جانبه اطلاعات، اطمینان می‌یابد که سایت شما بهینه، سریع و کاملاً سازگار با نیازهایتان باشد.',
            arrowSrc: null 
        }
    ];

    return (
        <div className={styles.processContainer}>
            {steps.map((step) => (
                <div key={step.id} className={`${styles.cardRow} ${step.alignClass} ${step.rowClass}`}>
                    <div className={`${styles.boxImage} ${step.bgClass}`}>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                    {step.arrowSrc && (
                        <Image 
                            className={step.arrowClass} 
                            src={step.arrowSrc} 
                            alt={step.arrowAlt}
                            width={500} 
                            height={300}
                            style={{ height: 'auto' }} 
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProcessSteps;