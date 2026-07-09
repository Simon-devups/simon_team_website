import styles from "../styles/portfolioPage.module.css"
import { CardTriangle } from "../Components/CardTriangle"
import GradientTitlefirst from "../Components/GradientTitlefirst"
import Link from "next/link";

const arr = Array.from({length: 16} , (__,i) => i+1);
export default function page() {
  return (
    
    <div className={styles.cont}>
      <GradientTitlefirst text1="Website design " text2=" طراحی سایت"  />
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