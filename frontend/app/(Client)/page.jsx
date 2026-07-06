// 'use client'
import Image from "next/image";
import "./globals.css"
import styles from "./styles/HomePage.module.css"
import OrangeTriangle from "./Components/OrangeTriangle";
import ProcessSteps from "./Components/webdesign-steps";
import ConsultationForm from "./Components/requestform";
import HilightedTitle from "./Components/HilightedTitle"
import Line2 from '../../public/Line 2.svg'
import Line1 from '../../public/Line 1.svg'
import arrow from '../../public/arrow.svg'
import orangeArrow from '../../public/OrangeArrow.svg'
import simon from '../../public/simon.svg'
import BlueCrosses from '../../public/Crosses.svg'

import GradientTitle from "./Components/GradientTitle";
import { CardTriangle } from "./Components/CardTriangle";

export default function Home() {
  // const response = await fetch('http://localhost:3000/portfolio', { cache: 'no-store' });
  // const data = await response.json();
  // console.log(data);

  return (
    <div style={{marginTop: '50px' , overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div className={styles.mainCont} style={{ position: 'relative', height: '500px', width: '100%', display: "flex", flexDirection: "column" }}>

        {/* <svg className={`middleAbsolute ${styles.first_svgCont}`} width="1080" height="422" viewBox="0 0 1080 422" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 2.5H863.737C872.098 2.50005 880.22 5.2948 886.811 10.4395L1063.07 148.022C1072.18 155.129 1077.5 166.034 1077.5 177.583V381.5C1077.5 402.211 1060.71 419 1040 419H216.263C207.902 419 199.78 416.205 193.189 411.061L16.9258 273.478C7.82175 266.371 2.50001 255.466 2.5 243.917V40C2.5 19.2893 19.2893 2.5 40 2.5Z" fill="#FFFAFA" stroke="#175DE3" strokeWidth="5" />
        </svg>
        <OrangeTriangle text={'مشاوره رایگان'} /> */}
        <h1 className={`middleAbsolute ${styles.mainTitle}`} style={{ color: '#175DE3', fontSize: '4rem', textAlign: 'center', textWrap: 'nowrap' }}>
          با  تیم     <HilightedTitle fontSize={'8rem'} color={'#FEB020'}>ســـــایــمـــون</HilightedTitle><br></br>
          کسب و کارت رو آنلاین کن
        </h1>
      </div>
      <Image src={Line1} alt="line" className={styles.Line1} />
      <Image src={Line2} alt="line" className={styles.Line2} />
      <section style={{ padding: ' 0px 30px' }} className={styles.sectionNeed}>
        <div className={styles.sectionNeed__Right}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <HilightedTitle
              topSvgOffset={'-15px'}
              topSvgLeftOffset={'13px'}
              bottomSvgOffset={'-12px'}
              bottomSvgRightOffset={'0px'}>
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
          <p
            style={{
              textAlign: 'justify',
              fontWeight: '500',
              maxWidth: '650px',
              width: '100%'
            }}
            className={styles.sectionNeed__RightText}
          >
            تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از صفر تا اوج همراهی کنیم. در تیم سایمون، سایت فقط یک ابزار نیست ؛ خـانه دیجــیتال شماست که با دقت، خلاقیت و عشق ساخته می‌شود.تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم.
          </p>

          <div style={{ display: 'flex', gap: '1.4rem', marginTop: '20px' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span dir="ltr" style={{ fontSize: '3rem', color: '#FFBA3B', textWrap: 'nowrap' }}>+  100</span>
              <div style={{ fontFamily: 'estedad' }}>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#545658' }}>پروژه موفق</div>
                <div style={{ fontSize: '11px', fontWeight: '500', color: '#545658' }}>با همراهی معتبر برند های کشور</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="2" height="72" viewBox="0 0 2 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="72" x2="1" stroke="url(#paint0_linear_706_288)" strokeWidth="2" />
                <defs>
                  <linearGradient id="paint0_linear_706_288" x1="2.5" y1="0" x2="2.5" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFAFA" stopOpacity="0.8" />
                    <stop offset="0.5" stopColor="#175DE3" />
                    <stop offset="1" stopColor="#FFFAFA" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span dir="ltr" style={{ fontSize: '3rem', color: '#FFBA3B', textWrap: 'nowrap' }}>+  80</span>
              <div style={{ fontFamily: 'estedad' }}>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#545658' }}>پروژه موفق</div>
                <div style={{ fontSize: '11px', fontWeight: '500', color: '#545658' }}>با همراهی معتبر برند های کشور</div>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.sectionNeed__Left}>
          <svg className="leftSVG" width="100%" height="696" viewBox="0 0 696 696" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M268.513 284.253C345.411 213.516 480.42 -44.9647 594.922 96.8103C690.757 215.51 571.001 387.594 492.955 460.505C391.441 555.329 217.696 579.809 102.288 489.667C52.649 450.87 23.5178 383.954 88.6968 351.063C110.715 339.948 153.136 344.901 178.794 335.961C211.7 324.499 242.78 307.932 268.513 284.253Z" fill="#FFBA3B" />
            <path d="M543.984 128.729H114.786C104.238 128.729 95.6875 137.28 95.6875 147.828V422.238C95.6875 432.786 104.238 441.336 114.786 441.336H543.984C554.532 441.336 563.083 432.786 563.083 422.238V147.828C563.083 137.28 554.532 128.729 543.984 128.729Z" fill="white" />
            <path d="M568.292 341.755H567.002V330.149H568.292V341.755ZM568.292 320.993H567.002V296.929H568.292V320.993Z" fill="#175DE3" />
            <path d="M543.984 442.033H114.785C109.537 442.026 104.506 439.938 100.796 436.227C97.0848 432.516 94.9971 427.486 94.9902 422.238V147.828C94.9937 142.579 97.0803 137.546 100.792 133.834C104.503 130.123 109.536 128.036 114.785 128.033H543.984C549.232 128.036 554.265 130.123 557.977 133.834C561.689 137.546 563.775 142.579 563.779 147.828V422.238C563.772 427.486 561.684 432.516 557.973 436.227C554.262 439.938 549.231 442.026 543.984 442.033ZM114.785 129.425C109.906 129.429 105.227 131.369 101.777 134.819C98.3263 138.269 96.3864 142.948 96.383 147.828V422.238C96.3864 427.117 98.3263 431.796 101.777 435.246C105.227 438.697 109.906 440.637 114.785 440.64H543.984C548.863 440.637 553.542 438.697 556.992 435.246C560.443 431.796 562.382 427.117 562.386 422.238V147.828C562.382 142.948 560.443 138.269 556.992 134.819C553.542 131.369 548.863 129.429 543.984 129.425H114.785Z" fill="#175DE3" />
            <path opacity="0.5" d="M251.752 376.703H245.304V375.31H251.752L251.868 376.703H251.752ZM238.753 376.703H232.241V375.31H238.753V376.703ZM225.741 376.703H219.293V375.31H225.741V376.703ZM212.742 376.703H206.23V375.31H212.742V376.703ZM199.731 376.703H193.283V375.31H199.731V376.703ZM186.719 376.703H180.271V375.31H186.719V376.703ZM173.72 376.703H167.272V375.31H173.72V376.703ZM160.708 376.703H154.26V375.31H160.708V376.703ZM147.709 376.703H141.261V375.31H147.709V376.703ZM134.697 376.703H132.273C130.799 376.707 129.345 376.362 128.03 375.697L128.649 374.407C129.772 374.975 131.014 375.271 132.273 375.271H134.658L134.697 376.703ZM258.226 374.123L257.285 373.105C258.776 371.732 259.696 369.85 259.864 367.83L261.256 367.946C261.061 370.321 259.979 372.535 258.226 374.149V374.123ZM123.413 370.577C122.998 369.485 122.784 368.328 122.781 367.16V363.884H124.174V367.16C124.172 368.156 124.355 369.145 124.716 370.074L123.413 370.577ZM261.244 361.357H259.851V354.909H261.244V361.357ZM124.174 357.436H122.781V350.988H124.174V357.436ZM261.244 348.409H259.851V341.961H261.244V348.409ZM124.174 344.437H122.781V337.989H124.174V344.437ZM261.244 335.41H259.851V328.962H261.244V335.41ZM124.174 331.425H122.781V324.977H124.174V331.425ZM261.244 322.398H259.851V315.95H261.244V322.398ZM124.174 318.426H122.781V311.914H124.174V318.426ZM261.244 309.399H259.851V302.951H261.244V309.399ZM124.174 305.414H122.781V298.967H124.174V305.414ZM261.244 296.387H259.851V289.875H261.244V296.387ZM124.174 292.403H122.781V285.955H124.174V292.403ZM261.244 283.376H259.851V276.928H261.244V283.376ZM124.174 279.404H122.781V272.956H124.174V279.404ZM261.244 270.377H259.851V263.864H261.244V270.377ZM124.174 266.392H122.781V259.944H124.174V266.392ZM261.244 257.365H259.851V250.917H261.244V257.365ZM124.174 253.393H122.781V246.945H124.174V253.393ZM261.244 244.366H259.851V237.918H261.244V244.366ZM124.174 240.329H122.781V233.881H124.174V240.329ZM261.244 231.302H259.851V224.854H261.244V231.302ZM124.174 227.434H122.781V220.921H124.174V227.434ZM261.244 218.406H259.851V215.195C259.855 214.185 259.667 213.183 259.296 212.242L260.586 211.726C261.023 212.831 261.246 214.008 261.244 215.195V218.406ZM124.213 214.538L122.82 214.422C123.024 212.063 124.1 209.865 125.838 208.257L126.792 209.289C125.323 210.625 124.404 212.459 124.213 214.435V214.538ZM255.337 207.974C254.224 207.42 252.996 207.133 251.752 207.136H249.276V205.64H251.752C253.21 205.639 254.649 205.974 255.956 206.62L255.337 207.974ZM242.777 207.136H236.329V205.64H242.777V207.136ZM229.765 207.136H223.317V205.64H229.765V207.136ZM216.766 207.136H210.318V205.64H216.766V207.136ZM203.754 207.136H197.306V205.64H203.754V207.136ZM190.755 207.136H184.243V205.64H190.755V207.136ZM177.743 207.136H171.295V205.64H177.743V207.136ZM164.744 207.136H158.296V205.64H164.744V207.136ZM151.732 207.136H145.284V205.64H151.732V207.136ZM138.72 207.136H132.273V205.743H138.72V207.136ZM132.621 148.846C132.621 150.066 132.26 151.258 131.582 152.272C130.904 153.286 129.94 154.076 128.813 154.543C127.686 155.009 126.446 155.13 125.25 154.891C124.054 154.652 122.955 154.064 122.094 153.201C121.232 152.337 120.646 151.238 120.41 150.041C120.173 148.845 120.297 147.605 120.766 146.479C121.234 145.352 122.027 144.391 123.042 143.715C124.057 143.039 125.25 142.68 126.47 142.682C128.103 142.686 129.667 143.337 130.82 144.492C131.974 145.648 132.621 147.214 132.621 148.846Z" fill="#175DE3" />
            <path opacity="0.2" d="M173.036 152.444H142.847C141.893 152.441 140.978 152.061 140.302 151.388C139.626 150.714 139.243 149.801 139.236 148.846C139.24 147.89 139.621 146.973 140.298 146.297C140.974 145.621 141.891 145.239 142.847 145.236H173.036C173.993 145.239 174.909 145.621 175.586 146.297C176.262 146.973 176.644 147.89 176.647 148.846C176.64 149.801 176.257 150.714 175.581 151.388C174.905 152.061 173.991 152.441 173.036 152.444Z" fill="#175DE3" />
            <path opacity="0.2" d="M318.628 150.82H297.44C296.917 150.82 296.415 150.612 296.045 150.242C295.675 149.872 295.467 149.37 295.467 148.846C295.465 148.587 295.515 148.33 295.614 148.089C295.712 147.849 295.857 147.631 296.041 147.447C296.224 147.264 296.443 147.119 296.683 147.02C296.923 146.922 297.18 146.872 297.44 146.873H318.628C318.887 146.872 319.145 146.922 319.385 147.02C319.625 147.119 319.843 147.264 320.027 147.447C320.21 147.631 320.356 147.849 320.454 148.089C320.553 148.33 320.602 148.587 320.601 148.846C320.601 149.37 320.393 149.872 320.023 150.242C319.653 150.612 319.151 150.82 318.628 150.82Z" fill="#175DE3" />
            <path opacity="0.2" d="M366.176 150.82H344.989C344.466 150.816 343.967 150.607 343.597 150.238C343.228 149.869 343.019 149.369 343.016 148.846C343.016 148.323 343.223 147.821 343.594 147.451C343.964 147.081 344.465 146.873 344.989 146.873H366.176C366.436 146.872 366.693 146.922 366.934 147.02C367.174 147.119 367.392 147.264 367.575 147.447C367.759 147.631 367.904 147.849 368.003 148.089C368.101 148.33 368.151 148.587 368.15 148.846C368.15 149.37 367.942 149.872 367.572 150.242C367.202 150.612 366.7 150.82 366.176 150.82Z" fill="#175DE3" />
            <path opacity="0.2" d="M413.722 150.82H392.573C392.05 150.816 391.551 150.607 391.181 150.238C390.812 149.869 390.603 149.369 390.6 148.846C390.6 148.323 390.807 147.821 391.177 147.451C391.548 147.081 392.049 146.873 392.573 146.873H413.722C413.982 146.872 414.24 146.921 414.481 147.02C414.722 147.118 414.941 147.263 415.125 147.447C415.31 147.63 415.456 147.848 415.556 148.088C415.656 148.329 415.708 148.586 415.708 148.846C415.704 149.371 415.494 149.873 415.122 150.242C414.749 150.612 414.246 150.82 413.722 150.82Z" fill="#175DE3" />
            <path opacity="0.2" d="M461.283 150.82H440.082C439.56 150.816 439.06 150.607 438.691 150.238C438.322 149.869 438.113 149.369 438.109 148.846C438.109 148.323 438.317 147.821 438.687 147.451C439.057 147.081 439.559 146.873 440.082 146.873H461.283C461.806 146.873 462.308 147.081 462.678 147.451C463.048 147.821 463.256 148.323 463.256 148.846C463.253 149.369 463.044 149.869 462.675 150.238C462.305 150.607 461.805 150.816 461.283 150.82Z" fill="#175DE3" />
            <path d="M522.125 152.328H490.066C489.142 152.328 488.257 151.962 487.604 151.309C486.951 150.656 486.584 149.77 486.584 148.847C486.582 148.388 486.671 147.934 486.845 147.51C487.02 147.086 487.276 146.701 487.599 146.376C487.923 146.051 488.307 145.794 488.73 145.618C489.154 145.442 489.608 145.352 490.066 145.352H522.125C522.583 145.352 523.037 145.442 523.46 145.618C523.884 145.794 524.268 146.051 524.591 146.376C524.915 146.701 525.171 147.086 525.345 147.51C525.52 147.934 525.608 148.388 525.607 148.847C525.607 149.77 525.24 150.656 524.587 151.309C523.934 151.962 523.048 152.328 522.125 152.328Z" fill="#FFBA3B" />
            <path d="M381.379 366.708H321.336C317.234 366.708 313.908 370.034 313.908 374.136V375.748C313.908 379.851 317.234 383.176 321.336 383.176H381.379C385.481 383.176 388.807 379.851 388.807 375.748V374.136C388.807 370.034 385.481 366.708 381.379 366.708Z" fill="#FFBA3B" />
            <path opacity="0.2" d="M521.662 297.961V235.261C521.66 235.002 521.71 234.744 521.809 234.504C521.907 234.264 522.053 234.046 522.236 233.862C522.42 233.679 522.638 233.534 522.878 233.435C523.118 233.336 523.376 233.287 523.635 233.288C524.158 233.288 524.66 233.496 525.03 233.866C525.4 234.236 525.608 234.738 525.608 235.261V297.961C525.608 298.484 525.4 298.986 525.03 299.356C524.66 299.726 524.158 299.934 523.635 299.934C523.376 299.936 523.118 299.886 522.878 299.787C522.638 299.689 522.42 299.543 522.236 299.36C522.053 299.176 521.907 298.958 521.809 298.718C521.71 298.478 521.66 298.22 521.662 297.961Z" fill="#175DE3" />
            <path opacity="0.2" d="M523.635 317.82C524.725 317.82 525.608 316.937 525.608 315.847C525.608 314.758 524.725 313.874 523.635 313.874C522.545 313.874 521.662 314.758 521.662 315.847C521.662 316.937 522.545 317.82 523.635 317.82Z" fill="#175DE3" />
            <path opacity="0.2" d="M523.635 345.701C524.725 345.701 525.608 344.818 525.608 343.728C525.608 342.638 524.725 341.755 523.635 341.755C522.545 341.755 521.662 342.638 521.662 343.728C521.662 344.818 522.545 345.701 523.635 345.701Z" fill="#175DE3" />
            <path opacity="0.2" d="M523.635 373.582C524.725 373.582 525.608 372.698 525.608 371.609C525.608 370.519 524.725 369.636 523.635 369.636C522.545 369.636 521.662 370.519 521.662 371.609C521.662 372.698 522.545 373.582 523.635 373.582Z" fill="#175DE3" />
            <path opacity="0.2" d="M464.067 206.336H311.303C302.557 206.336 295.467 213.423 295.467 222.166C295.467 230.908 302.557 237.995 311.303 237.995H464.067C472.813 237.995 479.903 230.908 479.903 222.166C479.903 213.423 472.813 206.336 464.067 206.336Z" fill="#175DE3" />
            <path opacity="0.2" d="M408.049 283.969H311.33C307.133 283.959 303.111 282.287 300.144 279.319C297.176 276.352 295.504 272.33 295.494 268.133C295.504 263.936 297.176 259.914 300.144 256.946C303.111 253.979 307.133 252.307 311.33 252.297H408.049C412.243 252.31 416.262 253.983 419.227 256.951C422.192 259.918 423.862 263.938 423.872 268.133C423.862 272.327 422.192 276.347 419.227 279.315C416.262 282.282 412.243 283.955 408.049 283.969Z" fill="#175DE3" />
            <path d="M436.418 320.993H299.168C298.187 320.989 297.248 320.598 296.555 319.905C295.861 319.211 295.47 318.272 295.467 317.291C295.47 316.311 295.861 315.371 296.555 314.678C297.248 313.985 298.187 313.594 299.168 313.59H436.418C437.399 313.594 438.338 313.985 439.031 314.678C439.725 315.371 440.116 316.311 440.119 317.291C440.116 318.272 439.725 319.211 439.031 319.905C438.338 320.598 437.399 320.989 436.418 320.993Z" fill="#EBEBEB" />
            <path d="M468.723 320.993H454.68C453.699 320.989 452.76 320.598 452.066 319.905C451.373 319.211 450.982 318.272 450.979 317.291C450.982 316.311 451.373 315.371 452.066 314.678C452.76 313.985 453.699 313.594 454.68 313.59H468.723C469.704 313.594 470.643 313.985 471.336 314.678C472.03 315.371 472.421 316.311 472.424 317.291C472.421 318.272 472.03 319.211 471.336 319.905C470.643 320.598 469.704 320.989 468.723 320.993Z" fill="#EBEBEB" />
            <path d="M359.65 328.911H418.674C419.655 328.914 420.594 329.305 421.288 329.998C421.981 330.692 422.372 331.631 422.375 332.612C422.372 333.592 421.981 334.532 421.288 335.225C420.594 335.918 419.655 336.309 418.674 336.313H359.65C358.67 336.309 357.73 335.918 357.037 335.225C356.344 334.532 355.953 333.592 355.949 332.612C355.953 331.631 356.344 330.692 357.037 329.998C357.73 329.305 358.67 328.914 359.65 328.911Z" fill="#EBEBEB" />
            <path d="M299.168 328.911H341.427C342.408 328.914 343.347 329.305 344.041 329.998C344.734 330.692 345.125 331.631 345.129 332.612C345.125 333.592 344.734 334.532 344.041 335.225C343.347 335.918 342.408 336.309 341.427 336.313H299.168C298.187 336.309 297.248 335.918 296.555 335.225C295.861 334.532 295.47 333.592 295.467 332.612C295.47 331.631 295.861 330.692 296.555 329.998C297.248 329.305 298.187 328.914 299.168 328.911Z" fill="#EBEBEB" />
            <path d="M382.333 351.633H299.168C298.187 351.63 297.248 351.239 296.555 350.545C295.861 349.852 295.47 348.912 295.467 347.932C295.47 346.951 295.861 346.012 296.555 345.319C297.248 344.625 298.187 344.234 299.168 344.231H382.333C383.313 344.234 384.253 344.625 384.946 345.319C385.64 346.012 386.031 346.951 386.034 347.932C386.031 348.912 385.64 349.852 384.946 350.545C384.253 351.239 383.313 351.63 382.333 351.633Z" fill="#EBEBEB" />
            <path d="M442.867 351.633H400.543C399.562 351.63 398.623 351.239 397.93 350.545C397.236 349.852 396.845 348.912 396.842 347.932C396.845 346.951 397.236 346.012 397.93 345.319C398.623 344.625 399.562 344.234 400.543 344.231H442.867C443.847 344.234 444.787 344.625 445.48 345.319C446.174 346.012 446.565 346.951 446.568 347.932C446.565 348.912 446.174 349.852 445.48 350.545C444.787 351.239 443.847 351.63 442.867 351.633Z" fill="#EBEBEB" />
            <g opacity="0.8">
              <path d="M271.806 176.621L144.785 200.806C139.725 201.769 136.404 206.652 137.367 211.712L168.131 373.288C169.095 378.348 173.978 381.669 179.037 380.705L306.059 356.521C311.118 355.557 314.439 350.674 313.476 345.615L282.712 184.038C281.749 178.979 276.866 175.658 271.806 176.621Z" fill="#175DE3" />
            </g>
          </svg>
        </div>
      </section>

      <section className={styles.simonIntroduceSection}>
        <div dir="ltr" className={styles.simonIntroduceSection__SvgCont}>

          {/* برای زیبایی */}
          <Image className={`blink ${styles.simonIntroduceSection__FakeLogo}`} src={simon} alt="logo"></Image>
          <Image style={{ transform: 'rotate(12deg)', top: 'unset', bottom: '-150px', left: 'unset', right: '250px' }} className={`blink ${styles.simonIntroduceSection__FakeLogo}`} src={simon} alt="logo"></Image>
          <Image style={{ transform: 'rotate(0deg)', top: '10px', bottom: 'unset', left: 'unset', right: '20px' }} className={styles.simonIntroduceSection__FakeLogo} src={BlueCrosses} alt="vector"></Image>

          <Image className={styles.simonIntroduceSection__Logo} src={simon} alt="logo"></Image>
          <Image className={styles.simonIntroduceSection__orangeArrow} src={orangeArrow} alt="logo"></Image>
          <div className={styles.simonIntroduceSection__paragraph} dir="rtl">
            <h2 style={{ fontSize: '2rem' }}>
              و   اما  تــــــیم  <span style={{ color: '#FFBA3B' }}>سایـــــــمون</span>   ....
            </h2>
            <p className={styles.simonIntroduceSection__p}>تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از صفر تا اوج همراهی کنیم. در تیم سایمون، سایت فقط یک ابزار نیست ؛ خـانه دیجــیتال شماست که با دقت، خلاقیت و عشق ساخته می‌شود.تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم.</p>
          </div>
        </div>

      </section>
      <GradientTitle />

      {/* سرویس سایمون */}
      <section className={styles.servicesSection}>

        {/* استایل گلوبال */}
        <div className="BlueSquare"></div>

        <div className={styles.servicesSection__threeCont}>
          <div className={styles.servicesSection__icon}>
            <Image width={50} height={50} src={'/building.svg'} alt="icon"></Image>
          </div>
          <p className={styles.servicesSection__title}>سایت فروشگاهی</p>

          {/* استایل گلوبال */}
          <div className="backGradBlue"></div>
          <div className="backGradOrange"></div>
        </div>

        <div className={styles.servicesSection__threeCont}>
          <p>تیم سـایمون از دل یک باور ساده متولد شد که هر کسب‌وکاری، هرچقدر هم کوچک، سزاوار حضوری قدرتمند در دنیای دیجیتال است. ما جمعی از معماران دیجیتال، طراحان خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از تیم سـایمون از دل یک  خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از تیم تا برندها را از تیم سـایمون از دل یک  خلاق و استراتژیست‌هایکیا تا برندها را از تیم سـایمون از دل یک  خلاق و استراتژیست‌های حرفه‌ای هستیم که کنار هم آمده‌ایم تا برندها را از تیم تا برندها را از تیم سـایمون از دل یک  خلاق و استراتژیست‌هایکیا </p>
        </div>

        <div className={styles.servicesSection__threeCont}>
          <div className={styles.servicesSection__icon}>
            <Image width={50} height={50} src={'/building.svg'} alt="icon"></Image>
          </div>
          <p className={styles.servicesSection__title}>سایت شرکتی</p>
          {/* استایل گلوبال */}
          <div className="backGradBlue"></div>
          <div className="backGradOrange"></div>
        </div>

      </section>

      <section className={styles.commentSection}>
        <CardTriangle />
        <CardTriangle />
        <CardTriangle />

      </section>

      {/* شکل آبی بزرگ */}
      {/* xMidYMid slice را میتوان با
      none جایگزین کرد */}
      <section>
        <svg style={{ marginTop: '25px', overflow: 'visible' }} width="100%" height="580px" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1416 530" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_0_1)">
            <path d="M-28 80.1042C-28 80.1042 188.684 -19.0341 332 3.2685C470.207 24.776 549.115 116.421 690.5 116.538C833.045 116.656 888.793 70.9533 1031 63.8713C1171.26 56.8865 1412 116.538 1412 116.538V409.091C1412 409.091 1258.24 489.563 1091.5 499.273C966.983 506.525 849.298 457.024 724.5 461.036C579.504 465.697 477.14 499.384 332 499.273C186.295 499.162 -28 435.063 -28 435.063V80.1042Z" fill="url(#paint0_radial_0_1)" />
          </g>
          <path d="M892 63.9984C892 63.9984 991.133 33.3295 1056.48 36.2695C1117.72 39.0252 1200.6 50.4083 1200.6 50.4083" stroke="url(#paint1_radial_0_1)" strokeWidth="3" />
          <path d="M418.726 518.71C418.726 518.71 321.255 529.871 256.133 523.752C195.093 518.017 101.469 493 101.469 493" stroke="url(#paint2_radial_0_1)" strokeWidth="3" />
          <path d="M1241.73 500C1241.73 500 1146.78 524.685 1081.45 527.735C1020.2 530.594 924 518.919 924 518.919" stroke="url(#paint3_radial_0_1)" strokeWidth="3" />
          <path d="M-29 80.1042C-29 80.1042 187.684 -19.0341 331 3.2685C469.207 24.776 548.115 116.421 689.5 116.538C832.045 116.656 887.793 70.9533 1030 63.8713C1170.26 56.8865 1411 116.538 1411 116.538V409.091C1411 409.091 1257.24 489.563 1090.5 499.273C965.983 506.525 848.298 457.024 723.5 461.036C578.504 465.697 476.14 499.384 331 499.273C185.295 499.162 -29 435.063 -29 435.063V80.1042Z" fill="#5A8EF0" fillOpacity="0.2" />
          <defs>
            <filter id="filter0_d_0_1" x="-32" y="0" width="1448" height="508" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.364706 0 0 0 0 0.890196 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(692 286.726) rotate(90) scale(283.458 720)">
              <stop stopColor="#5A8EF0" />
              <stop offset="1" stopColor="#175DE3" />
            </radialGradient>
            <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1050.27 62.5998) rotate(1.84154) scale(159.149 159.149)">
              <stop stopColor="#175DE3" />
              <stop offset="1" stopColor="#FFFAFA" />
            </radialGradient>
            <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260.34 502.865) rotate(-175.367) scale(159.149 159.148)">
              <stop stopColor="#175DE3" />
              <stop offset="1" stopColor="#FFFAFA" />
            </radialGradient>
            <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1082.69 506.465) rotate(176.592) scale(159.149 159.148)">
              <stop stopColor="#175DE3" />
              <stop offset="1" stopColor="#FFFAFA" />
            </radialGradient>
          </defs>
        </svg>
      </section>


      <section className={styles.needingSection}>
        <div className={styles.needingSection_firstDiv}>
          <div className={styles.needingSection__right}>
            <h3>کسب و کار شما چه <span>نیازی به سایت</span> دارد؟</h3>
            <p>سایت، ویترین همیشگی کسب‌وکار شماست؛ جایی که مشتری بدون نیاز به تماس، شما را پیدا می‌کند، باور می‌کند و می‌ماند. سایت یعنی اعتبار، دسترسی ۲۴ ساعته و فروشی بدون مرز جغرافیایی.</p>
          </div>

          <div className={styles.needingSection__bottomLeft}>
            <div className={styles.needingSection__topLeft}></div>

            <div className={styles.needingSection__SquareCont}>
              <div className={styles.needingSection__Squares}></div>
              <div className={styles.needingSection__Squares}></div>
            </div>

          </div>

          <img style={{ position: 'absolute', bottom: '0', left: '0', maxHeight: '200px' }} src="/OrangeArrowDown.svg" alt="arrow" />
        </div>

      </section>

      <section></section>

      <section className={styles.commentSection}>
        <figure className={styles.commentSection__figure}>
          <img src="/coatation.svg" style={{ position: 'absolute', top: '-25px', left: '15px', background: 'white', padding: '.5rem' }} />
          <div className={styles.commentSection__detailCont}>
            <div className={styles.commentSection__avatarCont}></div>
            <figcaption className={styles.commentSection__userName}>علیرضا احمدی</figcaption>
          </div>
          <blockquote className={styles.commentSection__comment}>سلام من احمدی هستم از عملکرد  تیم سایمون به شدت راضی بودم طی پروژه سلام من احمدی هستم از عملکرد  تیم سایمون به شدت راضی بودم طی پروژه </blockquote>
        </figure>

        <figure className={styles.commentSection__figure}>
          <img src="/coatation.svg" style={{ position: 'absolute', top: '-25px', left: '15px', background: 'white', padding: '.5rem' }} />
          <div className={styles.commentSection__detailCont}>
            <div className={styles.commentSection__avatarCont}></div>
            <figcaption className={styles.commentSection__userName}>علیرضا احمدی</figcaption>
          </div>
          <blockquote className={styles.commentSection__comment}>سلام من احمدی هستم از عملکرد  تیم سایمون به شدت راضی بودم طی پروژه سلام من احمدی هستم از عملکرد  تیم سایمون به شدت راضی بودم طی پروژه </blockquote>
        </figure>

        <figure className={styles.commentSection__figure}>
          <img src="/coatation.svg" style={{ position: 'absolute', top: '-25px', left: '15px', background: 'white', padding: '.5rem' }} />
          <div className={styles.commentSection__detailCont}>
            <div className={styles.commentSection__avatarCont}></div>
            <figcaption className={styles.commentSection__userName}>علیرضا احمدی</figcaption>
          </div>
          <blockquote className={styles.commentSection__comment}>سلام من احمدی هستم از عملکرد  تیم سایمون به شدت راضی بودم طی پروژه سلام من احمدی هستم از عملکرد  تیم سایمون به شدت راضی بودم طی پروژه </blockquote>
        </figure>
      </section>

      <GradientTitle text1="Website design steps" text2="مراحل طراحی سایت" />

      <ProcessSteps />
      <ConsultationForm />
    </div>
  );
}
