import styles from "./Content.module.css";

import { Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <Sidebar sidebar={props.state.sidebar} />
      <Route
        path="/profile"
        render={() => (
          <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          ></Profile>
        )}
      />
      <Route
        path="/messages"
        render={() => <Dialogs dialogsPage={props.state.dialogsPage}></Dialogs>}
      />
    </div>
  );
};

export default Content;
