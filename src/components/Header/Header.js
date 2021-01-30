import styles from "./Header.module.css"
import logo from "../../img/logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo}></img>
    </header>
  )
}

export default Header
