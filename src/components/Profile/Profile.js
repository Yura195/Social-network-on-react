import styles from "./Profile.module.css"

import AddPost from "./AddPost/AddPost"
import Post from "./Post/Post"
import UserInfo from "./UserInfo/UserInfo"

const Profile = () => {
  return (
    <div className={styles.profile}>
      <UserInfo />
      <AddPost />
      <Post message="Hi"/>
      <Post message="How are you?"/>
    </div>
  )
}

export default Profile
