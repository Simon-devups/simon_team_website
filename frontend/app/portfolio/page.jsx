import styles from "./portfolioPage.module.css"
import { CardTriangle } from "../Components/CardTriangle"

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

    <button className={`${styles.viewMore} goUp`}>مشاهده نمونه کار های بیشتر   {'>'}</button>
    </div>
  )
}