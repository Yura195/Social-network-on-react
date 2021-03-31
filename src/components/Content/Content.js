import styles from "./Content.module.css";

import { Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Dialogs from "../Dialogs/Dialogs";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const Content = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Route path="/profile/:userId?" render={() => <ProfileContainer></ProfileContainer>} />
      <Route path="/messages" render={() => <Dialogs></Dialogs>} />
      <Route path="/users" render={() => <UsersContainer></UsersContainer>} />
    </div>
  );
};

export default Content;
