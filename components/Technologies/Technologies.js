import styles from './Technologies.module.scss'
import {SiJavascript, SiNextdotjs, SiTypescript} from 'react-icons/si'
import {FaReact, FaAngular, FaSass, FaNodeJs, FaFigma} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'

export default function Technologies () {
  return (
    <div className={styles.technologies}>
      <h3>I have extensive knowledge and understanding of these Technologies:</h3>

      <div className={styles.techContainer}>
        <div className={styles.techCard}>
          <FaFigma />
          <p>Figma Design</p>
        </div>
        <div className={styles.techCard}>
          <AiFillHtml5 />
          <p>HTML</p>
        </div>
        <div className={styles.techCard}>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div className={styles.techCard}>
          <FaSass />
          <p>SASS</p>
        </div>
        <div className={styles.techCard}>
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className={styles.techCard}>
          <FaReact />
          <p>React</p>
        </div>
        <div className={styles.techCard}>
          <SiNextdotjs />
          <p>NextJS</p>
        </div>
        <div className={styles.techCard}>
          <FaAngular />
          <p>Angular</p>
        </div>
        <div className={styles.techCard}>
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div className={styles.techCard}>
          <FaNodeJs />
          <p>NodeJS</p>
        </div>

      </div>
    </div>
  )
}