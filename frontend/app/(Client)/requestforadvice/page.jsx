'use client'
import Image from "next/image";
import "../globals.css"
import styles from "../styles/HomePage.module.css"
import HilightedTitle from "../Components/HilightedTitle"
import ConsultationForm from "../Components/requestform";
import ConsultationFormlit from "../Components/requestformlit";
import ConsultationBanner from "../Components/banner"
import arrow from '../../../public/arrow.svg'
import GradientTitlefirst from "../Components/GradientTitlefirst"




export default function Home() {
  return (
    <>
    <GradientTitlefirst text1="Request for advice" text2="درخــواســت مشــاوره"/>
    <div className={styles.pageContainer}>
      
      <section style={{ marginBottom:'250px'}} className={styles.mainContactSection}>
        


        <div className={styles.contactRightContent}>
          
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle
              topSvgOffset={'-10px'}      
              topSvgLeftOffset={'0px'}      
              bottomSvgOffset={'-12px'}    
              bottomSvgRightOffset={'0px'}
            >
              <p 
              className={styles.pone}
              style={{                 
                  marginRight: '-10px',              
                  marginBottom: '10px',
              }}>                  
                 نــــحــوه <span style={{ color: '#175DE3' }}>درخــــواســـت</span> مشـــاوره   
              </p>
            </HilightedTitle>
              <Image 
              src={arrow}              
              className={styles.arrowIcon}
              style={{
                top: '45px',
                right: '290px',

              }}              
              />            
          </div>

          <p className={styles.sectionNeed__RightText} style={{ textAlign: 'justify', fontSize: '16px', fontWeight: '500',maxWidth: '650px', width: '100%' }}>
ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. اگر به راهنمایی نیاز دارید، درخواست همکاری دارید یا هر گونه پرسشی برایتان پیش آمده، می‌توانید از طریق فرم تماس، ایمیل یا شماره‌های درج شده با ما در ارتباط باشید. تیم ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. اگر به راهنمایی نیاز دارید، درخواست همکاری دارید یا هر گونه پرسشی برایتان پیش آمده است.          </p>

          <div className={styles.cardsRow}>
            <div className={styles.contactBox}>
              <div className={styles.contactBox__Left}>
                <span className={styles.phoneNum}>09392171366</span>
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
      <div style={{ position: 'relative', height: '0px', overflow: 'visible', zIndex: 0 }}>
        <Image
          className={styles.imgsix}
          src="/Group 100.svg"
          alt=""
          width={674}
          height={374}
        />
      </div>      
<ConsultationBanner/>
    </div>

    </>
  );
}

