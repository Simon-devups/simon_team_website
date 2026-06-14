import React from 'react'
import styles from "./StylesInComponents/HilightedTitle.module.css"

const HilightedTitle = ({ children , fontSize , color}) => {
    return (
        <div className={styles.mainCont}>
            {/* اس وی جی بالایی - با آی‌دی‌های منحصربه‌فرد top */}
            <svg className={styles.svgTop} width="56" height="70" viewBox="0 0 56 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0515 51.6192L10.0515 30.107C10.0515 19.0613 19.0058 10.107 30.0515 10.107L43.0755 10.107" stroke="url(#paint0_linear_top)" strokeWidth="2" />
                <path d="M0.999874 69.7491L0.999854 26C0.999848 12.1929 12.1927 0.999997 25.9999 0.999998L55.6913 1" stroke="url(#paint1_linear_top)" strokeWidth="2" />
                <defs>
                    <linearGradient id="paint0_linear_top" x1="43.3016" y1="11.2032" x2="10.2898" y2="45.5009" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFAFA" />
                        <stop offset="0.5" stopColor="#175DE3" />
                        <stop offset="1" stopColor="#FFFAFA" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_top" x1="56.0658" y1="2.81549" x2="1.39451" y2="59.6165" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFAFA" />
                        <stop offset="0.5" stopColor="#FFBA3B" />
                        <stop offset="1" stopColor="#FFFAFA" />
                    </linearGradient>
                </defs>
            </svg>

            <div className={styles.inner} style={{fontSize: fontSize , color: color}}>
                {children}
            </div>

            {/* اس وی جی پایینی - با آی‌دی‌های منحصربه‌فرد bottom و استایل چرخیده */}
            <div className={styles.svgBottomContainer}>
                <svg width="56" height="70" viewBox="0 0 56 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0515 51.6192L10.0515 30.107C10.0515 19.0613 19.0058 10.107 30.0515 10.107L43.0755 10.107" stroke="url(#paint0_linear_bottom)" strokeWidth="2" />
                    <path d="M0.999874 69.7491L0.999854 26C0.999848 12.1929 12.1927 0.999997 25.9999 0.999998L55.6913 1" stroke="url(#paint1_linear_bottom)" strokeWidth="2" />
                    <defs>
                        <linearGradient id="paint0_linear_bottom" x1="43.3016" y1="11.2032" x2="10.2898" y2="45.5009" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFAFA" />
                            <stop offset="0.5" stopColor="#175DE3" />
                            <stop offset="1" stopColor="#FFFAFA" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_bottom" x1="56.0658" y1="2.81549" x2="1.39451" y2="59.6165" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFAFA" />
                            <stop offset="0.5" stopColor="#FFBA3B" />
                            <stop offset="1" stopColor="#FFFAFA" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default HilightedTitle;