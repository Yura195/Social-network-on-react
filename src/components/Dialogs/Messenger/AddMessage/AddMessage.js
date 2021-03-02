import styles from "./AddMessage.module.css";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../../redux/dialogs-reducer";

const AddMessage = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={styles.input}>
      <textarea
        className={styles.textarea}
        placeholder="Enter your message"
        onChange={onMessageChange}
        value={props.newMessageText}
      ></textarea>
      <button className={styles.btn} onClick={addMessage}>
        Add new message
      </button>
    </div>
  );
};

export default AddMessage;
