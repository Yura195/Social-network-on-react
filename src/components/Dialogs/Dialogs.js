import AddMessageContainer from "./AddMessage/AddMessageContainer";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <AddMessageContainer store={props.store} />
    </div>
  );
};

export default Dialogs;
