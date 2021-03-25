import AddPost from "./AddPost";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const addPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default addPostContainer;
