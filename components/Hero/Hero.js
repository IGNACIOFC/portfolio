import styles from './Hero.module.scss'
import {BsArrowDownCircle, BsArrowDown} from 'react-icons/bs'

export default function Hero () {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.logo}>
        <div className={styles.imgContainer}></div>
        <p>IGNACIO FERNÁNDEZ</p>
      </div>
      <h1>Software Developer</h1>
      <h4>
        I am a Software Developer based in Madrid, Spain. Business oriented and experienced with all stages of the development cycle.
      </h4>

      <div className={styles.btnContainer}>
        <button className={styles.contactButton}>Contact me 👋</button>
        <button className={styles.workButton}><BsArrowDownCircle /> see my work</button>
      </div>
    </div>
  )
}