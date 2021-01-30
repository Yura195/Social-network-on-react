import styles from './Content.module.css'
import Sidebar from "../Sidebar/Sidebar"
import Profile from '../Profile/Profile'

const Content = () => {
    return (
        <div className={styles.content}>
        <Sidebar />
        <Profile/>
        </div>
    )
}

export default Content