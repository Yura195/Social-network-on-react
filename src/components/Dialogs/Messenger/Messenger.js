import styles from "./Messenger.module.css";

import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const Messenger = (props) => {
  let messages = props.messages.map((message, index) => (
    <Message message={message.text} key={index} />
  ));

  return (
    <div className={styles.messenger}>
      {messages}
      <AddMessage
        dispatch={props.dispatch}
        newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Messenger;
