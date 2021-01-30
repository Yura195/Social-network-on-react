import styles from './UserInfo.module.css';
import photo from '../../../img/photo.jpg'

const UserInfo = () => {
    return (
        <div className = {styles.user}>
            <div className = {styles.photo}>
                <img src={photo} alt="user" />
            </div>
            <div className= {styles.info}>
                <div className={styles.row}>Aleksei M.</div>
                <div className={styles.row}>Date of Birth: Marth 2</div>
                <div className={styles.row}>City: Moscow</div>
                <div className={styles.row}>Education: TPSU'12</div>
                <div className={styles.row}>Job: Frontend</div>                
            </div>
        </div>
    )
}

export default UserInfo