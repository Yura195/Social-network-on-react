import styles from "./Profile.module.css";

import Post from "./Post/Post";
import UserInfo from "./UserInfo/UserInfo";
import AddPostContainer from "./AddPost/AddPostContainer";

const Profile = (props) => {
  let posts = props.state.profilePage.posts.map((post,index) => (
    <Post key={index} message={post.text} />
  ));
  return (
    <div className={styles.profile}>
      <UserInfo />
      <AddPostContainer
        store={props.store}
      />
      {posts}
    </div>
  );
};

export default Profile;
