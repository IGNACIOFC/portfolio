import styles from './Projects.module.scss'

export default function ProjectCard () {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>Orange SPAs</h3>
        <p>Description</p>
        <a>Link to Project</a>
      </div>
      <div className={styles.projectImg}>
        <img src='orange.png'></img>
      </div>
    </div>
  )
}