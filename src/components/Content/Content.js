import styles from "./Content.module.css";

import { BrowserRouter, Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Content = () => {
  return (
    <BrowserRouter>
      <div className={styles.content}>
        <Sidebar />
        <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Dialogs} />
      </div>
    </BrowserRouter>
  );
};

export default Content;
