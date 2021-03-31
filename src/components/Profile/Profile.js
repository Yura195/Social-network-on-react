import styles from "./Profile.module.css";

import UserInfo from "./UserInfo/UserInfo";
import AddPostContainer from "./AddPost/AddPostContainer";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <UserInfo profile={props.profile}/>
      <AddPostContainer />
    </div>
  );
};

export default Profile;
