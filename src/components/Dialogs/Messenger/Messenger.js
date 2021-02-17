import styles from './Messenger.module.css';

import Message from './Message/Message';

const Messenger = () => {
  let messagesData = [
    { id: 1, text: "Hi" },
    { id: 2, text: "How are you?" },
  ];

  let message = messagesData.map((messagesItem) => (
    <Message message={messagesItem.text} key={messagesItem.id} />
  ));
  
return (
    <div className={styles.messenger}>
      {message}
    </div>
)
}

export default Messenger;