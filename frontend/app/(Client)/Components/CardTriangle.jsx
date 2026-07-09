import styles from './StylesInComponents/CardTriangle.module.css'
import Link from 'next/link'

export const CardTriangle = ({rawData}) => {
    return (
        <div className={styles.product__card}>
            <div className={styles.card__shape}>
                <div className={styles.side__tab}></div>

                <div className={styles.card__content}>
                    <div className={styles.card__media}>
                        <img src={rawData?.image ? rawData.image : "/tmp.png"} alt="RFID and GPS tracker product photo" />
                    </div>
                    <div className={styles.card__body} >
                        <h3>{rawData?.title}</h3>
                        <p className={styles.card__p}>{rawData?.description}</p>
                        <Link href={`/viewportfolio/${rawData?.id}`} className={styles.card__cta} dir='ltr'> &larr; مشاهده جزئیات</Link>
                    </div>
                </div>

                <svg className={styles.frame} viewBox="0 0 300 400" preserveAspectRatio="none">
                    <path d="M 30 3 H 215 L 297 85 V 370 A 27 27 0 0 1 270 397 H 30 A 27 27 0 0 1 3 370 V 30 A 27 27 0 0 1 30 3 Z"
                        fill="none" stroke="var(--card-blue)" strokeWidth="3" strokeLinejoin="round" />
                    <path className={styles.triangle} d="M 246 5 L 304 5 Q 316 5 316 17 L 316 68 Q 316 80 307.15 71.9 L 242.85 13.1 Q 234 5 246 5 Z"
                        fill="var(--card-blue)" />
                </svg>
                
            </div>
        </div>
    )
}