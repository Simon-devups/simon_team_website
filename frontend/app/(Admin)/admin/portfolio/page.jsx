import styles from '../styles/portfolio.module.css'
import CreatePortfolioButton from './CreatePortfolioButton'
const MockData = [
  { name: 'کافه رستوران خرس گرسنه', phone: '09123138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
  { name: 'کافه رستوران خرس گرسنه', phone: '09143138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
  { name: 'کافه رستوران خرس گرسنه', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
  { name: 'کافه رستوران خرس گرسنه', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
]
const page = () => {
  return (
    <div style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
      
      <h1 style={{ margin: '0 auto', color: '#175DE3' }}>لیست پورتفولیو</h1>
      <CreatePortfolioButton />

      <div className={styles['portfolioCont']} style={{ margin: '20px auto', width: '100%', maxWidth: '1336px' }}>
        {MockData.map(itm => {
          return(
            <div className={styles['borderPad']}>
              <div className={styles['portfolioContainer']}></div>

              <p style={{margin: '8px 16px 0 0'}}>{itm.name}</p>
              <div className={styles['Btns']}>
                <button className={styles['deleteBtn']}>
                  
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
                <button className={styles['viewBtn']}>مشاهده</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default page