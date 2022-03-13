import styles from './Projects.module.scss'
import ProjectCard from './ProjectCard'

export default function Projects () {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsTitleContainer}>
        <h3>My passion is to transform cool ideas into incredible products</h3>
        <p>I've been working for the last three years with both startup founders and experienced enterprises to help them take their product ideas to the next level.</p>
      </div>
      <div className={styles.projectList}>
        <ProjectCard />
      </div>
    </div>
  )
}