import styles from './Content.module.css'

import Sidebar from "../Sidebar/Sidebar"
import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'

const Content = () => {
    return (
        <div className={styles.content}>
        <Sidebar />
        <Profile/>
        <Dialogs/>
        </div>
    )
}

export default Content