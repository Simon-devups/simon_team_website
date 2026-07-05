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
    <GradientTitlefirst/>
      <section style={{padding:' 0px 30px', marginTop: '-20px'}} className={styles.sectionNeed}>        
        <div className={styles.sectionNeed__Right}> 
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle 
            topSvgOffset={'-15px'}      
            topSvgLeftOffset={'13px'}      
            bottomSvgOffset={'-12px'}     
            bottomSvgRightOffset={'0px'}>
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
        textAlign: 'justify', 
        fontSize: '16px', 
        fontWeight: '500',
        maxWidth: '650px', 
        width: '100%'
      }} 
      className={styles.sectionNeed__RightText}
    >
      تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از صفر تا اوج همراهی کنیم. در تیم سایمون، سایت فقط یک ابزار نیست ؛ خـانه دیجــیتال شماست که با دقت، خلاقیت و عشق ساخته می‌شود.تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم.
    </p>

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
<section style={{ padding: '0px 30px' , marginTop: '200px',marginBottom: '190px' }} className={styles.sectionNeeddd}>        
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
      <section style={{padding:' 0px 30px',marginBottom: '250px'}} className={styles.sectionNeed}>        
        <div className={styles.sectionNeed__Right}> 
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle 
            topSvgOffset={'-15px'}      
            topSvgLeftOffset={'13px'}      
            bottomSvgOffset={'-12px'}     
            bottomSvgRightOffset={'0px'}>
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
        textAlign: 'justify', 
        fontSize: '16px', 
        fontWeight: '500',
        maxWidth: '650px', 
        width: '100%',

      }} 
      className={styles.sectionNeed__RightText}
    >
      تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از صفر تا اوج همراهی کنیم. در تیم سایمون، سایت فقط یک ابزار نیست ؛ خـانه دیجــیتال شماست که با دقت، خلاقیت و عشق ساخته می‌شود.تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم.
    </p>

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
<ConsultationBanner/>  
  
    </>
  );
}
