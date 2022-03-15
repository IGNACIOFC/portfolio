import styles from "./Navbar.module.scss";
import {BsGithub, BsLayoutTextSidebarReverse} from 'react-icons/bs'

export default function Navbar () {
  return (
    <div className={styles.navbarContainer}>
      <a> <BsLayoutTextSidebarReverse /> Blog</a>
      <a href='https://www.github.com/IGNACIOFC'><BsGithub /> GitHub</a>
    </div>
  )
}