import styles from "./AddPost.module.css";
import React from "react";

import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../store/state";

const AddPost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <div className={styles.posts}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={styles.textarea}
        placeholder="Write some text"
        value={props.newPostText}
      />
      <button className={styles.btn} onClick={addPost}>
        Add new post
      </button>
    </div>
  );
};

export default AddPost;
