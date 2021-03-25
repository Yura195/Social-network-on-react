import styles from "./AddMessage.module.css";

import DialogsItem from "../DialogsItem/DialogsItem";
import MessageItem from "../MessageItem/MessageItem";

const AddMessage = (props) => {
  let dialogsItems = props.dialogsPage.dialogs.map((dialogItem, index) => (
    <DialogsItem to={dialogItem.id} key={index} name={dialogItem.name} />
  ));

  let messagesItems = props.dialogsPage.messages.map((messageItem, index) => (
    <MessageItem key={index} message={messageItem.text} />
  ));

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.container}>
      <div className="dialogs">{dialogsItems}</div>
      <div className="messages">
        {messagesItems}
        <textarea
          className={styles.textarea}
          placeholder="Enter your message"
          onChange={onMessageChange}
          value={props.newMessageText}
        />
        <button className={styles.btn} onClick={onAddMessage}>
          Add new message
        </button>
      </div>
    </div>
  );
};

export default AddMessage;
