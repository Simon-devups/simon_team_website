import styles from './StylesInComponents/GradientTitlefirst.module.css'

const GradientTitlefirst = ({ 
    text1 = 'simon services', 
    text2 = 'خدمات سایمون' 
}) => {
    return (
        <div className={styles.cont}>
            {/* تصاویر پس‌زمینه */}
            <img 
                src="/Group 97.svg" 
                alt="decoration left" 
                className={styles.backgroundImageLeft}
            />
            <img 
                src="/Group 98.svg" 
                alt="decoration right" 
                className={styles.backgroundImageRight}
            />

            {/* محتوای اصلی */}
            <div className={styles.contentWrapper}>
                <h3 className={styles.firstText}>{text1}</h3>
                <h3 className={styles.secondText}>{text2}</h3>
            </div>
        </div>
    )
}

export default GradientTitlefirst