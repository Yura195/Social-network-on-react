import styles from './DialogItem.module.css';

import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/messages/"+props.id} className={styles.item}>{props.name}</NavLink>
    )
}

export default DialogItem;