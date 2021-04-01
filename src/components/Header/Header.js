import styles from "./Header.module.css";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo}></img>
      <div className={styles.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
