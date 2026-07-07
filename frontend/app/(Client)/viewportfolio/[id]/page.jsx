import Image from "next/image";
import "../../globals.css"
import styles from "../../styles/HomePage.module.css"
import HilightedTitle from "../../Components/HilightedTitle"
import ConsultationBanner from "../../Components/banner"
import arrow from '../../../../public/arrow.svg'
import GradientTitlefirst from "../../Components/GradientTitlefirst"




export default async function Home({ params }) {
    const { id } = params || 1;
    let data = null;
    try {
        const response = await fetch(`http://localhost:3000/portfolio/${id}`, {
            cache: 'no-store',
            next: { revalidate: 0 }
        })

        if (response.ok) {
            data = await response.json();
        } else {
            console.error('API Error:', response.status);
        }
    }
    catch(err) {
        console.error('Failed to fetch portfolio:', err);
        data = null;
    }
    console.log('Portfolio data:', data);
    
    if(data === null) return <div>نمونه کاری که دنبالش بودید پیدا نشد :/</div>
    return (
        <>
            <GradientTitlefirst />
            <div className={styles.pageContainer}>
                <section className={styles.sectionNeedd}>

                    <div className={styles.sectionNeedd__RightContainer}>

                        <div className={styles.sectionNeedd__Right}>
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                                <HilightedTitle
                                    topSvgOffset={'-15px'}
                                    topSvgLeftOffset={'13px'}
                                    bottomSvgOffset={'-12px'}
                                    bottomSvgRightOffset={'0px'}
                                >
                                    <p
                                        className={styles.pone}
                                    >
                                        کــسب و کــار شــما چه <span style={{ color: '#175DE3' }}>نـــیازی بــه سایـــت</span> دارد ؟
                                    </p>
                                </HilightedTitle>
                                <Image
                                    src={arrow}
                                    className={styles.arrowIcon}

                                />
                            </div>

                            <p
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: '#545658',
                                    textAlign: 'justify',
                                    width: '100%',
                                    maxWidth: '650px'
                                }}
                                className={styles.sectionNeed__RightText}>
                                تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از صفر تا اوج همراهی کنیم. در تیم سایمون، سایت فقط یک ابزار نیست ؛ خـانه دیجــیتال شماست که با دقت، خلاقیت و عشق ساخته می‌شود.تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم.
                            </p>
                        </div>

                        <div className={styles.featuresBox}>
                            
                            {/* این قسمت در کاتالوگ نوشته شده فیلدی به صورت آرایه ندارد */}
                            <div className={styles.circleContainer}>
                                <span className={`${styles.circle} ${styles.purple}`}></span>
                                <span className={`${styles.circle} ${styles.darkBlue}`}></span>
                                <span className={`${styles.circle} ${styles.lightBlue}`}></span>
                            </div>
                            
                            {/* این قسمت در کاتالوگ نوشته شده فیلدی به صورت آرایه ندارد */}
                            <div className={styles.featuresGrid}>
                                <div className={styles.featureItem}>سامانه چت آنلاین</div>
                                <div className={styles.featureItem}>قالب سفارشی</div>
                                <div className={styles.featureItem}>سامانه چت آنلاین</div>
                                <div className={styles.featureItem}>سامانه پیامکی</div>
                                <div className={styles.featureItem}>سیستم فروشگاهی</div>
                                <div className={styles.featureItem}>اخذ درگاه بانکی</div>
                                <div className={styles.featureItem}>امکان اتصال به ترب</div>
                                <div className={styles.featureItem}>جست‌و‌جوی پیشرفته</div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.sectionNeedd__Leftt}>
                        <div className={styles.mockupWrapper}>
                            <Image
                                src={data?.images[0].url}
                                alt="پیش‌نمایش سایت"
                                width={702}
                                height={1182}
                                className={styles.mockupImage}
                                priority
                            />
                        </div>
                    </div>

                </section>
                <ConsultationBanner />
            </div>

        </>
    );
}