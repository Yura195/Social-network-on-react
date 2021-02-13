import styles from './Messenger.module.css';

import Message from './Message/Message';

const Messenger = () => {
return (
    <div className={styles.messenger}>
      <Message/>
    </div>
)
}

export default Messenger;