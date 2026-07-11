import { cookies } from 'next/headers';

const MockData = [
    { name: 'رادمهر تبریزی', phone: '09123138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
    { name: 'هانیه امیری', phone: '09143138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
    { name: 'فرهاد اکبری', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
    { name: 'فرهاد اکبری', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
];

async function page() {
    let consultations = null;
    let error = null;

    try {
        // ۱. دریافت توکن از کوکی
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            // اگر توکن وجود نداشت، خطا ثبت می‌شود و از MockData استفاده می‌کنیم
            error = 'توکن یافت نشد';
            console.warn('⚠️ توکن در کوکی وجود ندارد، از داده‌های ساختگی استفاده می‌شود.');
        } else {
            // ۲. ارسال درخواست با توکن در هدر Authorization
            const response = await fetch('http://localhost:3000/consultation-request', {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                consultations = await response.json();
                console.log('✅ داده‌های واقعی دریافت شد:', consultations);
            } else {
                error = `API Error: ${response.status}`;
                console.warn(`⚠️ API با خطا ${response.status} پاسخ داد، از MockData استفاده می‌شود.`);
            }
        }
    } catch (err) {
        error = err.message;
        console.warn('⚠️ خطا در برقراری ارتباط با API، از MockData استفاده می‌شود:', err);
    }

    // ۳. تصمیم‌گیری نهایی: اگر داده‌های واقعی داریم نمایش دهیم، در غیر این صورت MockData
    const dataToShow = consultations || MockData;

    return (
        <div style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
            <h1 style={{ margin: '0 auto', color: '#175DE3' }}>لیست درخواست مشاوره</h1>

            {/* در صورت وجود خطا، یک پیام هشدار نمایش بده (اختیاری) */}
            {error && (
                <div style={{
                    margin: '10px auto',
                    padding: '10px 20px',
                    backgroundColor: '#fff3cd',
                    color: '#856404',
                    borderRadius: '8px',
                    border: '1px solid #ffeeba',
                    maxWidth: '1336px',
                    width: '100%',
                    textAlign: 'center',
                    direction: 'rtl',
                }}>
                    ⚠️ {error} — داده‌های نمایش داده شده ساختگی هستند.
                </div>
            )}

            <div style={{ margin: '20px auto', width: '100%', maxWidth: '1336px' }}>
                {dataToShow.map((data, key) => (
                    <div key={key} style={{ marginTop: '10px', padding: '48px', borderRadius: '20px', border: '1px solid #e5e7eb', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ color: '#737373' }}>نام کاربر:</span>
                                <h4 style={{ color: '#3b82f6' }}>{data.name}</h4>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ color: '#737373' }}>شماره تماس:</span>
                                <h4 style={{ color: '#3b82f6' }}>{data.phone}</h4>
                            </div>
                        </div>

                        <div style={{ marginTop: '20px', borderTop: '1px solid #e5e7eb', paddingTop: '8px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px', justifyContent: 'space-between', alignContent: 'center' }}>
                                <span style={{ color: '#737373' }}>متن درخواست:</span>
                                <span>{data.text}</span>
                            </div>
                        </div>

                        <button style={{ position: 'absolute', bottom: '0', left: '0' }}></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;