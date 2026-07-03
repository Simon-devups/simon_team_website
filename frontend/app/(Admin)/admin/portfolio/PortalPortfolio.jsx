'use client';

import { createPortal } from 'react-dom';
import styles from '../styles/portfolio.module.css'; // یا هر استایل دیگری


export default function PortalPortfolio({ onClose }) {

    // المنت هدف در لیاوت
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    return createPortal(
        <div className={styles.portalOverlay}>
            <div className={styles.portalContent}>
                <h2 style={{ color: '#3b82f6' }}>ایجاد نمونه کار جدید</h2>
                {/* فرم یا محتوای مورد نظر */}
                <button className={styles.close} onClick={onClose}>&#10005;</button>

                <div>عنوان نمونه کار</div>
                <input className={styles.inputs} type="text" name="title" id="title" />

                <div>متن توضیحی نمونه کار</div>
                <textarea className={styles.inputs} name="متن توضیحی نمونه کار" id="text"></textarea>

                <div>ویژگی های نمونه کار</div>
                <div className={styles.sixGrid}>
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                </div>

                <div>پالت های رنگی نمونه کار</div>
                <div className={styles.threeGrid}>
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                    <input className={styles.inputs} type="text" />
                </div>

                <div>عکس صفحات نمونه کار</div>
                <div className={styles.threeGrid}>
                    <label htmlFor="page" style={{ position: 'static', textAlign: 'center', width: '150px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={styles.createNew}>
                        انتخاب فایل
                    </label>
                    <input
                        style={{ display: 'none' }}
                        className={styles.inputs}
                        type="file"
                        name="pages"
                        id="page"
                        accept='image/**'
                    />
                </div>

                <input style={{ bottom: '15px', left: '15px', top: 'unset' }} className={styles.createNew} type="submit" value="افزودن نمونه کار" />
            </div>
        </div >,
        portalRoot
    );
}