import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <ul className="list">
        <li className={styles.item}>
          <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/messages" className={styles.link} activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/news" className={styles.link}>
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/music" className={styles.link}>
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/settings" className={styles.link}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
