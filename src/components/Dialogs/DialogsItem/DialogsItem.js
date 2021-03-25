import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  return (
    <div className="dialog">
      <NavLink to={"/messages/" + props.id} className={styles.item}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogsItem;
