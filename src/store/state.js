const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        text: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let message = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = "";
      this._state.dialogsPage.messages.push({ id: 4, text: message });
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
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
