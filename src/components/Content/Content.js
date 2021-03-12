import styles from "./Content.module.css";

import { Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <Sidebar sidebar={props.store.getState().sidebar} />
      <Route
        path="/profile"
        render={() => (
          <Profile store={props.store}></Profile>
        )}
      />
      <Route
        path="/messages"
        render={() => (
          <Dialogs store={props.store}></Dialogs>
        )}
      />
    </div>
  );
};

export default Content;
