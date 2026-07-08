'use client'
import styles from '../styles/portfolio.module.css'
import { useState } from 'react'
import PortalPortfolio from './PortalPortfolio'

const CreatePortfolioButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={styles['createNew']} onClick={() => setOpen(true)}>
        ایجاد نمونه کار جدید
      </button>
      {open && <PortalPortfolio onClose={() => setOpen(false)} />}
        {console.log(open)
        }
    </>
  )
}
export default CreatePortfolioButton