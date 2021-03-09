import styles from "./Messenger.module.css";

import Message from "./Message/Message";
import AddMessageContainer from "./AddMessage/AddMessageContainer";

const Messenger = (props) => {
  let messages = props.state.dialogsPage.messages.map((message, index) => (
    <Message message={message.text} key={index} />
  ));

  return (
    <div className={styles.messenger}>
      {messages}
      <AddMessageContainer  store={props.store}/>
    </div>
  );
};

export default Messenger;
