import styles from "./Messenger.module.css";

import Message from "./Message/Message";

const Messenger = (props) => {
  let messages = props.messages.map((message,index) => (
    <Message message={message.text} key={index} />
  ));

  return <div className={styles.messenger}>{messages}</div>;
};

export default Messenger;
