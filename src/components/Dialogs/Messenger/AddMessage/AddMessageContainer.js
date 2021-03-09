import AddMessage from "./AddMessage";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../../redux/dialogs-reducer";

const AddMessageContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let onAddMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <AddMessage
      addMessage={onAddMessage}
      updateNewMessageText={onMessageChange}
      newMessageText={state.newMessageText}
    />
  );
};

export default AddMessageContainer;
