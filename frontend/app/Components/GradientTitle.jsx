import styles from './StylesInComponents/GradientTitle.module.css'
const GradientTitle = ({text1= 'simon services' , text2 = 'خدمات سایمون'}) => {
  return (
    <div className={styles.cont}>
        <h3 className={styles.firstText}>{text1}</h3>
        <h3 className={styles.secondText}>{text2}</h3>
        <img src="/arrow 2.svg" alt="arrow" className={styles.image}/>
    </div>
  )
}

export default GradientTitle