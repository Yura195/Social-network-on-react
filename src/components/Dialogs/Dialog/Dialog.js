import styles from "./Dialog.module.css";

import DialogItem from "./DialogItem/DialogItem";

const Dialog = () => {
  let dialogData = [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Max" },
  ];

  let dialogItem = dialogData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  return <div className={styles.dialog}>{dialogItem}</div>;
};

export default Dialog;
