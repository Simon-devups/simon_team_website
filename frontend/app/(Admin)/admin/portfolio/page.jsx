import Link from 'next/link'
import styles from '../styles/portfolio.module.css'
import CreatePortfolioButton from './CreatePortfolioButton'
import DeletePortfolioButton from './DeletePortfolioButton'

let MockData = [
  { id: 1, name: 'کافه رستوران خرس گرسنه', phone: '09123138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
  { id: 2, name: 'کافه رستوران خرس گرسنه', phone: '09143138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
  { id: 3, name: 'کافه رستوران خرس گرسنه', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
  { id: 4, name: 'کافه رستوران خرس گرسنه', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
]

export default async function Page() {
  let portfolios = [];

  try {
    const response = await fetch('http://localhost:3000/portfolio?Page=1', {
      cache: 'no-store',
    });

    if (response.ok) {
      portfolios = await response.json();
      console.log('portfolios =>', portfolios);
    } else {
      console.error('API Error:', response.status);
    }
  } catch (err) {
    console.error('Failed to fetch portfolios:', err);
  }
  console.log(portfolios);
  
  return (
    <div style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
      <h1 style={{ margin: '0 auto', color: '#175DE3' }}>لیست پورتفولیو</h1>
      <CreatePortfolioButton />

      <div
        className={styles['portfolioCont']}
        style={{ margin: '20px auto', width: '100%', maxWidth: '1336px' }}
      >
        {(portfolios.length > 0 ? portfolios : MockData).map((itm) => {
          return (
            <div className={styles['borderPad']} key={itm.id ?? itm.phone}>
              <div className={styles['portfolioContainer']}></div>

              <p style={{ margin: '8px 16px 0 0' }}>{itm.name}</p>

              <div className={styles['Btns']}>
                <DeletePortfolioButton id={itm.id ? itm.id : ''} />
                <Link href={`/viewportfolio/${itm.id ?? ''}`} className={styles['viewBtn']}>
                  مشاهده
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}