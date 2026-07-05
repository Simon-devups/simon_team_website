import styles from "../styles/portfolioPage.module.css"
import { CardTriangle } from "../Components/CardTriangle"
import Link from "next/link";

const arr = Array.from({length: 16} , (__,i) => i+1);
export default function page() {
  return (
    <div className={styles.cont}>
    <section className={styles.GridCont}>
      {
        arr.map(itm => <CardTriangle key={itm}></CardTriangle>)
      }
      <CardTriangle />

    </section>

    <Link href={'/viewportfolio'} className={`${styles.viewMore} goUp`}>مشاهده نمونه کار های بیشتر   {'>'}</Link>
    </div>
  )
}