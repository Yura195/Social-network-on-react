import styles from "./AddMessage.module.css";

const AddMessage = (props) => {
  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.input}>
      <textarea
        className={styles.textarea}
        placeholder="Enter your message"
        onChange={onMessageChange}
        value={props.newMessageText}
      ></textarea>
      <button className={styles.btn} onClick={onAddMessage}>
        Add new message
      </button>
    </div>
  );
};

export default AddMessage;
