import styles from "./AddPost.module.css";
import React from "react";


const AddPost = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
      <button className={styles.btn} onClick={onAddPost}>
        Add new post
      </button>
    </div>
  );
};

export default AddPost;
