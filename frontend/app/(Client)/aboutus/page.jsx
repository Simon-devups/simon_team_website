'use client'
import Image from "next/image";
import "../globals.css"
import styles from "../styles/HomePage.module.css"
import HilightedTitle from "../Components/HilightedTitle"
import ConsultationBanner from "../Components/banner"
import arrow from '../../../public/arrow.svg'
import GradientTitlefirst from "../Components/GradientTitlefirst"






export default function Home() {
  return (
    <>
      <GradientTitlefirst  text1="About us" text2="دربــاره مــا"/>
      <section style={{ padding: ' 0px 30px', marginTop: '-20px' }} className={styles.sectionNeed}>
        <div className={styles.sectionNeed__Right}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle
              topSvgOffset={'-10px'}
              topSvgLeftOffset={'0px'}
              bottomSvgOffset={'-12px'}
              bottomSvgRightOffset={'0px'}>
              <p
                className={styles.pone}
                style={{
                      marginRight: '-10px',              
                      marginBottom: '10px',
                }}
              >
               دربــاره <span style={{ color: '#175DE3' }}>تیـــم</span>  ســایمــون
              </p>
            </HilightedTitle>
            <Image
              src={arrow}
              className={styles.arrowIcon}
              style={{
                top: '45px',
                right: '220px',

              }}              
            />

          </div>
          <p
            style={{
              textAlign: 'justify',
              fontSize: '16px',
              fontWeight: '500',
              maxWidth: '650px',
              width: '100%'
            }}
            className={styles.sectionNeed__RightText}
          >
سایمون، نامی آشنا در عرصه‌ی طراحی دیجیتال، متشکل از تیمی جوان، خلاق و متخصص است. دفتر کار ما، فضایی پر از ایده‌های نو و نگاه‌های تازه به مقوله‌ی وب‌سایت و برندسازی است. هر یک از اعضای تیم، با تخصصی منحصربه‌فرد، پازلی را تکمیل می‌کند که نتیجه‌ی آن، آثاری ماندگار و کاربرپسند است. در سایمون، طراحی یک فرآیند خطی نیست؛ بلکه مسیری پویا، تعاملی و مبتنی بر شناخت عمیق از نیازهای واقعی کاربران است. ما به جای گفتن، با کارهایمان حرف می‌زنیم و کیفیت را فدای کمیت نمی‌کنیم.          </p>

        </div>

        <div>
          <Image
            className={styles.imgtwo}
            src="/Group 89 (3).svg"
            alt="لوگوی سایت"
            width={'640'}
            height={'554'}
          />
        </div>
      </section>
      <div style={{ position: 'relative', height: '0px', overflow: 'visible', zIndex: 0 }}>
        <Image
          className={styles.imgthree}
          src="/Group 93.svg"
          alt=""
          width={674}
          height={374}

        />
      </div>
      <section style={{ padding: '0px 30px', marginTop: '200px', marginBottom: '190px' }} className={styles.sectionNeeddd}>
        <div className={styles.sectionNeedd__Left}>
          <div className={styles.cardsContainer}>

            <div className={styles.bgPatternWrapper}>
              <Image
                src="/Group 91.svg"
                alt="پترن زیر کارت‌ها"
                width={220}
                height={220}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className={styles.cardColumn}>
              <div className={styles.cardItem}></div>
              <div className={styles.cardItem}></div>
            </div>

            <div className={`${styles.cardColumn} ${styles.offsetColumn}`}>
              <div className={styles.cardItem}></div>
              <div className={styles.cardItem}></div>
            </div>

          </div>
        </div>
        <div className={styles.sectionNeed__Right}>
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
                }}
              >
                 اعــضای <span style={{ color: '#175DE3' }}>تیـــم</span> ســـایمــون
              </p>
            </HilightedTitle>
            <Image
              src={arrow}
              className={styles.arrowIcon}
              style={{
                top: '45px',
                right: '230px',

              }} 
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
تیم سایمون متشکل از چهار متخصص با چهار نقش کلیدی و مکمل است. هر یک از اعضا، با بهره‌گیری از تخصص و مهارت منحصربه‌فرد خود، مسئولیت بخش مشخصی از فرآیند طراحی و توسعه را بر عهده دارد. ساختار منظم تیم، بر اساس هماهنگی دقیق وظایف و تعامل مستمر میان اعضا شکل گرفته است. جلسات منظم، تقسیم‌کار شفاف و بازخوردهای سازنده، پایه‌های همکاری ما را مستحکم ساخته است. هرچند تعدادمان محدود است، اما با نظم و انضباطی مثال‌زدنی، پروژه‌ها را در زمان‌بندی دقیق و با کیفیتی بی‌نقص به سرانجام می‌رسانیم.          </p>
        </div>
      </section>
      <div style={{ position: 'relative', height: '0px', overflow: 'visible', zIndex: 0 }}>
        <Image
          className={styles.imgfour}
          src="/Group 99.svg"
          alt=""
          width={841}
          height={381}
        />
      </div>
      <section style={{ padding: ' 0px 30px', marginBottom: '250px' }} className={styles.sectionNeed}>
        <div className={styles.sectionNeed__Right}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle
              topSvgOffset={'-10px'}
              topSvgLeftOffset={'0px'}
              bottomSvgOffset={'-12px'}
              bottomSvgRightOffset={'0px'}>
              <p
                className={styles.pone}
                style={{                 
                  marginRight: '-10px',              
                  marginBottom: '10px',
                }}                
              >
               چــرا <span style={{ color: '#175DE3' }}>تیـــم</span>  ســایمــون ... ؟
              </p>
            </HilightedTitle>
            <Image
              src={arrow}
              className={styles.arrowIcon}
              style={{
                top: '45px',
                right: '230px',

              }}              

            />

          </div>
          <p
            style={{
              textAlign: 'justify',
              fontSize: '16px',
              fontWeight: '500',
              maxWidth: '650px',
              width: '100%',

            }}
            className={styles.sectionNeed__RightText}
          >
چون ما فراتر از یک تیم طراحی، یک همراه استراتژیک برای کسب‌وکار شما هستیم. در تیم سایمون، هر پروژه با درکی عمیق از هویت، اهداف و مخاطبان برند شما آغاز می‌شود. ما باور داریم که هر کسب‌وکاری داستانی منحصربه‌فرد برای گفتن دارد و وظیفه‌ی ما، خلق بستری دیجیتال برای روایت آن داستان است. تخصص، تعهد و نگاه خلاقانه‌ی ما، تضمین‌کننده‌ی سایتی است که نه‌تنها چشم‌نواز است، بلکه کاربرپسند، سریع و بهینه برای موتورهای جستجو نیز می‌باشد. ما به جای تحویل پروژه، آغاز یک همراهی بلندمدت را رقم می‌زنیم.          </p>

        </div>

        <div><Image
          className={styles.imgfive}
          src="/Group 92.svg"
          width={'600'}
          height={'400'}

        />

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
      <ConsultationBanner />

    </>
  );
}
