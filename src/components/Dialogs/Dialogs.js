import styles from "./Dialogs.module.css";

import Dialog from "./Dialog/Dialog";
import Messenger from "./Messenger/Messenger";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <Dialog dialogs={props.dialogsPage.dialogs} />
      <Messenger messages={props.dialogsPage.messages} />
    </div>
  );
};

export default Dialogs;
