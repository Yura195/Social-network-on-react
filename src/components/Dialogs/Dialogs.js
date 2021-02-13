import styles from './Dialogs.module.css';

import Dialog from './Dialog/Dialog';
import Messenger from './Messenger/Messenger';

const Dialogs = () =>{
    return (
        <div className={styles.dialogs}>
            <Dialog />
            <Messenger />
        </div>
    )
}

export default Dialogs;