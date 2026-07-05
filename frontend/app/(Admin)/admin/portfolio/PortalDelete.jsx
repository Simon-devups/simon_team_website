'use client';

import { createPortal } from 'react-dom';
import styles from '../styles/portfolio.module.css'; // یا هر استایل دیگری


export default function PortalDelete({ onClose }) {

    // المنت هدف در لیاوت
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    return createPortal(
        <div className={styles.portalOverlay}>
            <div className={styles.portalContent} style={{padding: '30px 40px 90px 120px', textAlign: 'center'}}>
                <button onClick={onClose} className={styles["close"]}>✕</button>
                <h3>آیا از حذف نمونه کار مطمئن هستید؟</h3>

                <input onClick={onClose} style={{ bottom: '15px', left: '15px', top: 'unset' , backgroundColor: '#e5484d'}} className={styles.createNew} type="submit" value="بله" />
                <input onClick={onClose} style={{ bottom: '15px', left: '65px', top: 'unset' }} className={styles.createNew} type="submit" value="خیر" />
            </div>
        </div >,
        portalRoot
    );
}