import styles from "./Profile.module.css";

import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
  let posts = props.profilePage.posts.map((post,index) => (
    <Post key={index} message={post.text} />
  ));
  return (
    <div className={styles.profile}>
      <UserInfo />
      <AddPost
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
      {posts}
    </div>
  );
};

export default Profile;
