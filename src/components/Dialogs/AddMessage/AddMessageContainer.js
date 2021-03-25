import AddMessage from "./AddMessage";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

const addMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default addMessageContainer;
