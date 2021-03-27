import styles from "./Content.module.css";

import { Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Users from "../Users/Users";

const Content = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Route path="/profile" render={() => <Profile></Profile>} />
      <Route path="/messages" render={() => <Dialogs></Dialogs>} />
      <Route path="/users" render={() => <Users></Users>} />
    </div>
  );
};

export default Content;
