import styles from "./Dialog.module.css";

import { NavLink } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";

const Dialog = () => {
  return (
    <div className={styles.dialog}>
      <DialogItem />
    </div>
  );
};

export default Dialog;
