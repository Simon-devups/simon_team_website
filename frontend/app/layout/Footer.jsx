import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.right}>
                <div className={styles.logo}>
                    <img src="/simon.svg" alt="logo" />
                </div>
                <p className={styles.introduce}>تیم سایمون کنار شماست تا با خلاقیت، استراتژی و تحلیل دقیق، برندتان را در دنیای دیجیتال ماندگار و تاثیرگذار کند.</p>
            </div>
            <div className={styles.left}>
                <div className={styles.left__list}>
                    <div className={styles.left__listCont}>
                        <div>لینک های مر تبط</div>
                        <span>پروژه موفق</span>
                        <span>پروژه موفق</span>
                        <span>پروژه موفق</span>
                    </div>
                    <div className={styles.left__listCont}>
                        <div>خدمات ما</div>
                        <span>پروژه موفق</span>
                        <span>پروژه موفق</span>
                        <span>پروژه موفق</span>
                    </div>
                    <div className={styles.left__listCont}>
                        <div>ارتباط باما</div>
                        <span>پروژه موفق</span>
                        <span>پروژه موفق</span>
                        <span>پروژه موفق</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer