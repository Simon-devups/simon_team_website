'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // برای رفرش صفحه بعد از حذف
import styles from '../styles/portfolio.module.css';

export default function PortalDelete({ onClose, id }) {
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    // فقط در کلاینت mount شود تا به document دسترسی داشته باشیم
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    // تابع حذف
    const handleDelete = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/portfolio/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                // اگر نیاز به ارسال کوکی یا توکن دارید:
                // credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'خطا در حذف آیتم');
            }

            onClose(); // بستن پورتال
            //رفرش با SSR
            router.refresh();

        }
        catch (err) {
            setError(err.message);
            console.error('Delete error:', err);
        }
        finally {
            setLoading(false);
        }
    };

    return createPortal(
        <div className={styles.portalOverlay}>
            <div className={styles.portalContent} style={{ padding: '30px 40px 90px 120px', textAlign: 'center' }}>
                <button onClick={onClose} className={styles["close"]}>✕</button>
                <h3>آیا از حذف نمونه کار مطمئن هستید؟</h3>

                {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}

                <input
                    onClick={handleDelete}
                    style={{ bottom: '15px', left: '15px', top: 'unset', backgroundColor: '#e5484d' }}
                    className={styles.createNew}
                    type="submit"
                    value={loading ? 'در حال حذف...' : 'بله'}
                    disabled={loading}
                />
                <input
                    onClick={onClose}
                    style={{ bottom: '15px', left: '65px', top: 'unset' }}
                    className={styles.createNew}
                    type="submit"
                    value="خیر"
                    disabled={loading}
                />
            </div>
        </div>,
        portalRoot
    );
}