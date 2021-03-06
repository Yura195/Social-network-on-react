import styles from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <div>
      <div className={styles.message}>{props.message}</div>
    </div>
  );
};

export default MessageItem;
