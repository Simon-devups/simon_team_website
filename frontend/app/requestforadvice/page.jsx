'use client'
import Image from "next/image";
import "../globals.css"
import styles from "../styles/HomePage.module.css"
import HilightedTitle from "../Components/HilightedTitle"
import ConsultationForm from "../Components/requestform";
import ConsultationFormlit from "../Components/requestformlit";
import ConsultationBanner from "../Components/banner"
import arrow from '../../public/arrow.svg'



export default function Home() {
  return (
    <>
    <div className={styles.pageContainer}>
      
      <section className={styles.mainContactSection}>
        


        <div className={styles.contactRightContent}>
          
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle
              topSvgOffset={'-15px'}      
              topSvgLeftOffset={'13px'}      
              bottomSvgOffset={'-12px'}    
              bottomSvgRightOffset={'0px'}
            >
              <p style={{
                fontSize: '30px',
                color: '#FFBA3B',
                fontFamily: 'koolak',
                textAlign: 'right',
                marginRight: '-28px',
                marginBottom: '10px'
              }}>
                کــسب و کــار شــما چه <span style={{ color: '#175DE3' }}>نـــیازی بــه سایـــت</span> دارد ؟
              </p>
            </HilightedTitle>
              <Image 
              src={arrow}              
              style={{  
              position: 'absolute',               
              top: '45px',                                  
              right: '405px',       
              zIndex: 3,         
              width: '53.35px',        
              height: '30.44px' 
                    }}
              />            
          </div>

          <p className={styles.sectionNeed__RightText} style={{ textAlign: 'justify', fontSize: '16px', fontWeight: '500',maxWidth: '650px', width: '100%' }}>
ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. اگر به راهنمایی نیاز دارید، درخواست همکاری دارید یا هر گونه پرسشی برایتان پیش آمده، می‌توانید از طریق فرم تماس، ایمیل یا شماره‌های درج شده با ما در ارتباط باشید. تیم ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. اگر به راهنمایی نیاز دارید، درخواست همکاری دارید یا هر گونه پرسشی برایتان پیش آمده است.          </p>

          <div className={styles.cardsRow}>
            <div className={styles.contactBox}>
              <div className={styles.contactBox__Left}>
                <span className={styles.phoneNum}>09301731703</span>
                <span className={styles.phoneTxt}>تلفن همراه</span>
              </div>
              <div className={styles.contactBox__Right}>
                <Image 
                src="/Group 94.svg" 
                alt="موقعیت ما روی نقشه" 
                width={49} 
                height={50}
                />
              </div>
            </div>
            <div className={styles.contactBox}>
              <div className={styles.contactBox__Left}>
                <span className={styles.phoneNum}>09301731703</span>
                <span className={styles.phoneTxt}>تلفن همراه</span>
              </div>
              <div className={styles.contactBox__Right}>
                <Image 
                src="/Group 94.svg" 
                width={49} 
                height={50}
                />
              </div>
            </div>
          </div>

        </div>
        <div className={styles.contactLeftMap}>
            <ConsultationFormlit/>
        </div>        
      </section>
<ConsultationBanner/>
    </div>

    </>
  );
}

