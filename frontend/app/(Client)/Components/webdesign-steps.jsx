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
            desc: <> با ثبت درخواست خود، اولین قدم را برای تحول دیجیتال کسب‌<br />وکارتان بردارید. </>,
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
            desc: 'کارشناسان باتجربه‌ی ما با شما تماس می‌گیرند تا نیازها را دقیق بشنوند.',
            arrowSrc: '/مسیر-2 3.svg',
            arrowClass: styles.pathSegment2,
            arrowAlt: 'مسیر زرد ۲'
        },
        {
            id: 3,
            rowClass: styles.row3,
            alignClass: styles.alignRight,
            bgClass: styles.bgVector4,
            title: 'تحلیل و بررسی نیازها',
            desc: <>شناخت عمیق اهداف، مخاطبان و چالش‌های کسب‌وکار برای<br /> طراحی هوشمندانه‌ترین راهکار.</>,
            arrowSrc: '/مسیر-3 3.svg',
            arrowClass: styles.pathSegment3,
            arrowAlt: 'مسیر زرد ۳'
        },
        {
            id: 4,
            rowClass: styles.row4,
            alignClass: styles.alignLeft,
            bgClass: styles.bgVector3,
            title: 'طراحی تجربه و رابط کاربری',
            desc: <>خلق ظاهری چشم‌نواز و مسیری روان در هماهنگی کامل با هویت<br /> برند شما.</>,
            arrowSrc: '/مسیر-4 3.svg',
            arrowClass: styles.pathSegment4,
            arrowAlt: 'مسیر زرد ۴'
        },
        {
            id: 5,
            rowClass: styles.row5,
            alignClass: styles.alignRight,
            bgClass: styles.bgVector4,
            title: 'توسعه و کدنویسی',
            desc: 'تبدیل طرح‌ها به کدهای تمیز، سریع و واکنش‌گرا با آخرین فناوری‌های روز.',
            arrowSrc: '/مسیر-5 3.svg',
            arrowClass: styles.pathSegment5,
            arrowAlt: 'مسیر زرد ۵'
        },
        {
            id: 6,
            rowClass: styles.row6,
            alignClass: styles.alignLeft,
            bgClass: styles.bgVector3,
            title: ' تست و تضمین کیفیت',
            desc: 'بررسی سرعت، امنیت و نمایش در دستگاه‌های مختلف و رفع کامل خطاها.',
            arrowSrc: '/مسیر-6 3.svg',
            arrowClass: styles.pathSegment6,
            arrowAlt: 'مسیر زرد ۶'
        },
        {
            id: 7,
            rowClass: '',
            alignClass: styles.alignRight,
            bgClass: styles.bgVector4,
            title: ' راه‌اندازی و پشتیبانی',
            desc: 'انتشار رسمی سایت و همراهی همیشگی برای رشد، به‌روزرسانی و موفقیت شما.',
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