import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  let sidebarItems = props.sidebar.map((sidebarItem) => (
    <li className={styles.item} key={sidebarItem.id}>
      <NavLink
        to={sidebarItem.path}
        className={styles.link}
        activeClassName={styles.active}
      >
        {sidebarItem.link}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul className="list">{sidebarItems}</ul>
    </nav>
  );
};

export default Sidebar;
