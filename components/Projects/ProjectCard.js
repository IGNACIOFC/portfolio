import styles from './Projects.module.scss'

export default function ProjectCard ({description, title, link, background, img}) {

  const divImage = {
    backgroundImage : "url(" + background.img + ")",
    backgroundColor: background.color,
    color: background.fontColor
  };

  return (
    <div className={styles.projectCard} style={divImage}>
      <div className={styles.projectInfo} >
        <h3 className={styles.projectTitle}>{title}</h3>
        <p>{description}</p>
        <a href={link} style={{color:divImage.color}}>Link to Project</a>
      </div>
      <div className={styles.projectImg}>
        <img src={img}></img>
      </div>
    </div>
  )
}