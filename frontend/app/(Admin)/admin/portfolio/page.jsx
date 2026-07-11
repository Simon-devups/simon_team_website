import Link from 'next/link'
import styles from '../styles/portfolio.module.css'
import CreatePortfolioButton from './CreatePortfolioButton'
import DeletePortfolioButton from './DeletePortfolioButton'

export default async function Page() {
  let portfolios = [];
  let error = null;

  try {
    const response = await fetch('http://localhost:3000/portfolio?Page=1', {
      cache: 'no-store',
    });

    if (response.ok) {
      const data = await response.json();

      // اگر بک‌اند آرایه‌ی خام برمی‌گردونه:
      if (Array.isArray(data)) {
        portfolios = data;
      }
      // اگر بک‌اند به شکل { data: [...] } یا { items: [...] } برمی‌گردونه:
      else if (Array.isArray(data?.data)) {
        portfolios = data.data;
      } else if (Array.isArray(data?.items)) {
        portfolios = data.items;
      } else {
        error = 'ساختار پاسخ API نامعتبر است';
        console.error('Unexpected API shape:', data);
      }
    } else {
      const errBody = await response.text();
      error = `API Error: ${response.status}`;
      console.error('API Error:', response.status, errBody);
    }
  } catch (err) {
    error = err.message;
    console.error('Failed to fetch portfolios:', err);
  }

  return (
    <div style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
      <h1 style={{ margin: '0 auto', color: '#175DE3' }}>لیست پورتفولیو</h1>
      <CreatePortfolioButton />

      {error && (
        <div style={{
          margin: '10px auto', padding: '10px 20px',
          backgroundColor: '#fff3cd', color: '#856404',
          borderRadius: '8px', border: '1px solid #ffeeba',
          maxWidth: '1336px', width: '100%', textAlign: 'center', direction: 'rtl',
        }}>
          ⚠️ {error}
        </div>
      )}

      <div
        className={styles['portfolioCont']}
        style={{ margin: '20px auto', width: '100%', maxWidth: '1336px' , background: 'white'}}
      >
        {portfolios.length === 0 && !error && (
          <p style={{ margin: '0 auto', color: '#737373' }}>هنوز نمونه‌کاری ثبت نشده است.</p>
        )}

        {portfolios.map((itm) => (
          <div className={styles['borderPad']} key={itm.id ?? itm.phone}>
            <div className={styles['portfolioContainer']}>
              {console.log(itm)
              }
              <img style={{width: '100%' , height: '100%'}} src={itm?.image} alt="" />
            </div>
            <p style={{ margin: '8px 16px 0 0' }}>{itm.title}</p>
            <div className={styles['Btns']}>
              <DeletePortfolioButton id={itm.id ? itm.id : ''} />
              <Link href={`/viewportfolio/${itm.id ?? ''}`} className={styles['viewBtn']}>
                مشاهده
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}