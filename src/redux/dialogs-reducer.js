const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  messages: [
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you?" },
  ],
  dialogs: [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Max" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = state.newMessageText;
      state.newMessageText = "";
      state.messages.push({ id: 4, text: message });
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};

export const addMessageCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export default dialogsReducer;
