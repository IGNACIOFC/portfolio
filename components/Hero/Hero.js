import styles from './Hero.module.scss'

export default function Hero () {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.logo}>
        <div className={styles.imgContainer}>
          <img />
        </div>
      </div>
       <h1>Software Developer</h1>
    </div>
  )
}