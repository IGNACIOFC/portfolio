import styles from "./Navbar.module.scss";

export default function Navbar () {
  return (
    <div className={styles.navbarContainer}>
      <a>Blog</a>
      <a>GitHub</a>
    </div>
  )
}