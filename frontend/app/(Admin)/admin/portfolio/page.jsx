import styles from '../styles/portfolio.module.css'
import CreatePortfolioButton from './CreatePortfolioButton'
import DeletePortfolioButton from './DeletePortfolioButton'
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
                <DeletePortfolioButton/>
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