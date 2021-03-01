import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    sidebar: [
      { path: "/profile", link: "Profile", id: 1 },
      { path: "/messages", link: "Messages", id: 2 },
      { path: "/news", link: "News", id: 3 },
      { path: "/music", link: "Music", id: 4 },
      { path: "/settings", link: "Settings", id: 5 },
    ],
    dialogsPage: {
      messages: [
        { id: 1, text: "Hello" },
        { id: 2, text: "How are you?" },
      ],
      dialogs: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Max" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { id: 1, text: "Hello everyone" },
        { id: 2, text: "I am new at this" },
      ],
      newPostText: "Hi",
    },
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addMessageCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export default store;
