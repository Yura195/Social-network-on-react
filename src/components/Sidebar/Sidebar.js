import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let sidebar = [
    { path: "/profile", link: "Profile", id: 1 },
    { path: "/messages", link: "Messages", id: 2 },
    { path: "/news", link: "News", id: 3 },
    { path: "/music", link: "Music", id: 4 },
    { path: "/settings", link: "Settings", id: 5 },
  ];

  let sidebarItems = sidebar.map((sidebarItem) => (
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
