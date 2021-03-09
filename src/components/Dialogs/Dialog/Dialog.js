import styles from "./Dialog.module.css";

import DialogItem from "./DialogItem/DialogItem";

const Dialog = (props) => {
  let dialogs = props.state.dialogsPage.dialogs.map((dialog,index) => (
    <DialogItem name={dialog.name} id={dialog.id} key={index} />
  ));

  return <div className={styles.dialog}>{dialogs}</div>;
};

export default Dialog;
