import AddPost from "./AddPost";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";

const AddPostContainer = (props) => {
  let state = props.store.getState().profilePage;

  let onAddPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <AddPost
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      newPostText={state.newPostText}
      posts={state.posts}
    />
  );
};

export default AddPostContainer;
