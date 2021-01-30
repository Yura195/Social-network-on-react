import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.nav}>
            <ul className="list">
               <li className={styles.item}><a href="/profile" className={styles.link}>Profile</a></li>
               <li className={styles.item}><a href="/messages" className={styles.link}>Messages</a></li>
               <li className={styles.item}><a href="/news" className={styles.link}>News</a></li>
               <li className={styles.item}><a href="/music" className={styles.link}>Music</a></li>
               <li className={styles.item}><a href="/settings" className={styles.link}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar