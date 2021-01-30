import AddPost from "./AddPost/AddPost"
import Post from "./Post/Post"
import styles from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo"

const Profile = () => {
  return (
    <div className={styles.profile}>
      <UserInfo />
      <AddPost />
      <Post />
    </div>
  )
}

export default Profile
