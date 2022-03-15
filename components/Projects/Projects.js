import styles from './Projects.module.scss'
import ProjectCard from './ProjectCard'

export default function Projects () {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsTitleContainer}>
        <h3>My passion is to transform cool ideas into incredible products</h3>
        <p>I have been working for the last three years with both startup founders and experienced enterprises to help them take their product ideas to the next level.</p>
      </div>
      <div className={styles.projectList}>
        <ProjectCard 
          title='Orange SPAs'
          description='Working and developing new features for Orange group of SPAs.'
          img='orange.png'
          background={{img: '/nubes.png', color: '#FFC6CF', fontColor: 'black'}}
          link='https://www.orange.es'
        />
        <ProjectCard 
          title='Vamonos'
          description='Side project to buy tickets and discover the nightlife in Madrid.'
          img='vamonos.png'
          background={{img: '/dots_pattern.png', color: '#7177d2', fontColor: 'white'}}
          link='https://www.vamonos.vercel.app'
        />
        <ProjectCard 
          title='Buscolibro'
          description='Trying to reinvent the book industry in Spain.'
          img='buscolibro.jpg'
          background={{img: '/blue_pattern.png', color: '#e6eff7', fontColor: 'black'}}
          link='https://www.buscolibro.es'
        />
      </div>
    </div>
  )
}