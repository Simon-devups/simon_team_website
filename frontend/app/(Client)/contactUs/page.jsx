'use client'
import Image from "next/image";
import "../globals.css"
import styles from "../styles/HomePage.module.css"
import HilightedTitle from "../Components/HilightedTitle"
import ConsultationForm from "../Components/requestform";
import arrow from '../../../public/arrow.svg'
import GradientTitlefirst from "../Components/GradientTitlefirst"




export default function Home() {
  return (
    <>
    <GradientTitlefirst  text1="Contact us" text2="تــماس بـا مـا "/>
    <div className={styles.pageContainer}>
      
      <section className={styles.mainContactSection}>
        


        <div className={styles.contactRightContent}>
          
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle
              topSvgOffset={'-10px'}      
              topSvgLeftOffset={'5px'}      
              bottomSvgOffset={'-12px'}    
              bottomSvgRightOffset={'0px'}
            >
              <p 
              className={styles.pone}
                style={{                 
                  marginRight: '-10px',              
                  marginBottom: '10px',
                }}               
>
                  بــــا مـا در <span style={{ color: '#175DE3' }}>ارتــــباط</span>  باشیــــد . . . 
              </p>
            </HilightedTitle>
              <Image 
              src={arrow}
              className={styles.arrowIcon}
              style={{
                top: '45px',
                right: '270px',

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
                width={40} 
                height={40.82}
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
                width={40} 
                height={40.82}
                />
              </div>
            </div>
          </div>

        </div>
        <div className={styles.contactLeftMap}>
          <Image 
            className={styles.imgone}
            src="/image 32.png" 
            alt="موقعیت ما روی نقشه" 
            width={569} 
            height={446}
            style={{
                marginTop: '20px'
            }}
          />
        </div>        
      </section>

      <section className={styles.socialFooter}>
        <span className={styles.socialText}>در شبکه‌های اجتماعی با ما در ارتباط باشید.</span>
        <div className={styles.socialIconsGroup}>
          <a href="#" className={`${styles.socialBtn} ${styles.facebook}`}><Image src="/Vector (6).svg" width={24} height={24} alt="fb"/></a>
          <a href="#" className={`${styles.socialBtn} ${styles.linkedin}`}><Image src="/Vector (7).svg" width={24} height={24} alt="in"/></a>
          <a href="#" className={`${styles.socialBtn} ${styles.whatsapp}`}><Image src="/Group 95.png" width={24.88} height={25.03} alt="wa"/></a>
          <a href="#" className={`${styles.socialBtn} ${styles.telegram}`}><Image src="/Vector (1).png" width={24.37} height={21.89} alt="tg"/></a>
          <a href="#" className={`${styles.socialBtn} ${styles.instagram}`}><Image src="/Group.svg" width={25} height={25} alt="ig"/></a>
        </div>
        
      </section>

    </div>
    <ConsultationForm/>
    </>
  );
}
