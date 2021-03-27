import styles from "./AddPost.module.css";

import Post from "../Post/Post";

const AddPost = (props) => {
  let posts = props.profilePage.posts.map((post, index) => (
    <Post key={index} message={post.text} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.posts}>
      <textarea
        onChange={onPostChange}
        className={styles.textarea}
        placeholder="Write some text"
        value={props.newPostText}
      />
      <button className={styles.btn} onClick={onAddPost}>
        Add new post
      </button>
      {posts}
    </div>
  );
};

export default AddPost;
