import React from 'react'

import styles from './StylesInComponents/OrangeTriangel.module.css'
const OrangeTriangle = ({text , style}) => {
    return (
        <div className={styles.cont} style={style}>
            <span style={{position: 'absolute' , rotate: '45deg', color: '#175DE3'}} className='middleAbsolute' >{text}</span>
            <svg width="168" height="139" viewBox="0 0 168 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_278_52)">
                    <path d="M152.096 2C158.171 2 163.096 6.92487 163.096 13L163.096 121.854C163.096 131.059 152.464 136.193 145.255 130.468L8.18123 21.6142C0.0229366 15.1355 4.60413 2 15.022 2L152.096 2Z" fill="#FFBA3B" />
                    <path d="M152.096 2.99976C157.618 2.99976 162.096 7.47723 162.096 13.0001V121.854C162.096 130.223 152.43 134.889 145.877 129.685L8.80286 20.8307C1.38673 14.9409 5.5513 2.9999 15.0218 2.99976H152.096Z" stroke="#175DE3" strokeWidth="2" />
                </g>
               
            </svg>

        </div>
    )
}

export default OrangeTriangle