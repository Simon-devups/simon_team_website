"use client"
import React from 'react';
import Image from 'next/image';
import styles from './StylesInComponents/requestform.module.css';

const ConsultationForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <input type="text" placeholder="نام و نام خانوادگی ..." required />
                    <input type="tel" placeholder="شماره تلفن همراه ..." required />
                </div>
                
                <textarea placeholder="متن درخواست شما ..." rows={4} required></textarea>
                
                <button type="submit" className={styles.submitBtn}>ارسال درخواست</button>
            </form>
        </div>
    );
};

export default ConsultationForm;