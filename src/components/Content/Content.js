import styles from "./Content.module.css";

import { Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Content = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Route path="/profile" render={() => <Profile></Profile>} />
      <Route path="/messages" render={() => <Dialogs></Dialogs>} />
    </div>
  );
};

export default Content;
