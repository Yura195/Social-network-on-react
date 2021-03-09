import styles from "./Dialogs.module.css";

import Dialog from "./Dialog/Dialog";
import Messenger from "./Messenger/Messenger";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <Dialog state={props.state} />
      <Messenger
        store={props.store}
        state={props.state}
      />
    </div>
  );
};

export default Dialogs;
