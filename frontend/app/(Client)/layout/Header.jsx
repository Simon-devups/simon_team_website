'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.headerRoot} dir="rtl">

      <div className={styles.imgUnder}>
        <Image src="/Rectangle 210 (1).svg" alt="under image" width={100} height={51.88} style={{ objectFit: 'cover' }} priority />
      </div>

      <div className={styles.headerBar}>
        <div className={`${styles.menuSide} ${styles.menuSideRight}`}>
          <Link href="/webDesign" className={styles.menuItem}>طراحی سایت</Link>
          {/* صفحه خدمات نداریم  */}
          <Link href="#" className={styles.menuItem}>خدمات ما</Link>
          <Link href="/portfolio" className={styles.menuItem}>نمونه کارها</Link>
        </div>

        <div className={styles.logoSpace}></div>

        <div className={`${styles.menuSide} ${styles.menuSideLeft}`}>
          <Link href="/aboutus" className={styles.menuItem}>درباره ما</Link>
          <Link href="/contactUs" className={styles.menuItem}>تماس با ما</Link>
          <Link href="/requestforadvice" className={styles.btnConsult}>درخواست مشاوره</Link>
        </div>
      </div>

      <div className={styles.imgOver}>
        <Link href="/">
          <Image src="/Group 102.svg" alt="over image" width={180} height={123.5} style={{ objectFit: 'cover' }} priority />
        </Link>
      </div>

      <div className={styles.mobileBar}>
        

        <button
          className={`${styles.hamburgerBtn} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="باز کردن منو"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link href="/requestforadvice" className={styles.btnConsult}>درخواست مشاوره</Link>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link href="/webDesign" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>طراحی سایت</Link>
        <Link href="#" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>خدمات ما</Link>
        <Link href="/portfolio" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>نمونه کارها</Link>
        <Link href="/aboutus" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>درباره ما</Link>
        <Link href="/contactUs" className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>تماس با ما</Link>
      </div>

    </div>
  );
}