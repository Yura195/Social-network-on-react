import styles from "./Content.module.css";

import { BrowserRouter, Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Content = (props) => {
  console.log(props)
  return (
    <BrowserRouter>
      <div className={styles.content}>
        <Sidebar sidebar={props.sidebar}/>
        <Route path="/profile" render={() => <Profile posts={props.state.posts}></Profile>} />
        <Route path="/messages" render={() => <Dialogs></Dialogs>} />
      </div>
    </BrowserRouter>
  );
};

export default Content;
