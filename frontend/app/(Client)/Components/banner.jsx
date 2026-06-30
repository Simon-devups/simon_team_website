import React from 'react';
import Image from 'next/image';
import styles from './StylesInComponents/banner.module.css';
export default function ConsultationBanner() {
  return (
    <div className={styles.container}>
      
      <div className={`${styles.outerPattern} ${styles.topLeftPattern}`}>
        <Image 
          src="/Group 97.svg" 
          alt="پترن پس زمینه"
          width={306}
          height={274}
        />
      </div>

      <div className={`${styles.outerPattern} ${styles.bottomRightPattern}`}>
        <Image 
          src="/Group 98.svg"
          alt="پترن پس زمینه"
          width={306}
          height={274}
        />
      </div>

      <div className={styles.mainBox}>
        <div className={styles.svgBackground}>
          <svg width="1140" height="364" viewBox="0 0 1140 364" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.actualSvg}>
            <g filter="url(#filter0_d_1177_6)">
              <path d="M27 92C27 56.1015 56.1015 27 92 27H1042C1077.9 27 1107 56.1015 1107 92V210V265.5C1107 301.399 1077.9 330.5 1042 330.5H837H726.09C710.547 330.5 695.518 324.93 683.729 314.8L652.771 288.2C640.982 278.07 625.953 272.5 610.41 272.5H567H523.59C508.047 272.5 493.018 278.07 481.229 288.2L450.271 314.8C438.482 324.93 423.453 330.5 407.91 330.5H297H92C56.1015 330.5 27 301.399 27 265.5V210V92Z" fill="url(#paint0_radial_1177_6)"/>
            </g>
            <path d="M279 307H402.473C417.675 307 432.396 301.672 444.077 291.941L480.548 261.559C492.229 251.828 506.95 246.5 522.152 246.5H563.25H610.922C625.851 246.5 640.325 251.639 651.911 261.053L688.089 290.447C699.675 299.861 714.149 305 729.078 305H854.5" stroke="url(#paint1_linear_1177_6)" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="793.005" y1="58.75" x2="331.005" y2="60.75" stroke="url(#paint2_linear_1177_6)" stroke-width="2.5"/>
            <defs>
              <filter id="filter0_d_1177_6" x="0" y="0" width="1140" height="363.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="3" dy="3"/>
                <feGaussianBlur stdDeviation="15"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_6"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1177_6" result="shape"/>
              </filter>
              <radialGradient id="paint0_radial_1177_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(567 178.75) scale(540 151.75)">
                <stop stop-color="#5A8EF0"/>
                <stop offset="1" stop-color="#175DE3"/>
              </radialGradient>
              <linearGradient id="paint1_linear_1177_6" x1="279" y1="276.75" x2="854.5" y2="276.75" gradientUnits="userSpaceOnUse">
                <stop stop-color="#175DE3"/>
                <stop offset="0.35" stop-color="#FFFAFA"/>
                <stop offset="0.7" stop-color="#FFFAFA"/>
                <stop offset="1" stop-color="#175DE3"/>
              </linearGradient>
              <linearGradient id="paint2_linear_1177_6" x1="330.998" y1="59" x2="792.998" y2="57" gradientUnits="userSpaceOnUse">
                <stop stop-color="#175DE3"/>
                <stop offset="0.35" stop-color="#FFFAFA"/>
                <stop offset="0.673077" stop-color="#FFFAFA"/>
                <stop offset="1" stop-color="#175DE3"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={`${styles.innerLogo} ${styles.innerLogoLeft}`}>
          <Image 
            src="/Group 79.svg" 
            alt="لوگو پس زمینه چپ"
            width={157.49}
            height={170}
          />
        </div>

        <div className={`${styles.innerLogo} ${styles.innerLogoRight}`}>
          <Image 
            src="/Group 79.svg" 
            alt="لوگو پس زمینه راست"
            width={157.49}
            height={170}
          />
        </div>

        <div className={styles.contentContainer}>

          <div className={styles.actionButtons}>
            <button className={styles.primaryBtn}>درخواست مشاوره</button>
            <button className={styles.secondaryBtn}>تماس با ما</button>
          </div> 
          <div className={styles.centerText}>
            <h2>همین الان مشاوره</h2>
            <div className={styles.subText}>
              <span className={styles.highlightedBadge}>رایـــــگان</span> بگیر
            </div>
          </div>         
          <div className={styles.headsetWrapper}>
            <Image 
              src="/Group (1).svg" 
              alt="مشاوره تلفنی"
              width={282.96}
              height={306.2}
              className={styles.headsetSvg}
              priority
            />
          </div>

         


        </div>

        <div className={styles.socialContainer}>
          <a href="#" className={styles.socialCircle}>
            <Image src="/Group (2).svg" alt="اینستاگرام" width={21} height={21} />
          </a>
          <a href="#" className={styles.socialCircle}>
            <Image src="/Vector (15).svg" alt="تلگرام" width={21} height={21} />
          </a>
          <a href="#" className={styles.socialCircle}>
            <Image src="/Vector (13).svg" alt="واتساپ" width={21} height={21} />
          </a>
        </div>

      </div>
    </div>
  );
}