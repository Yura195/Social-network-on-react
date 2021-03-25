import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.point}></div>
      <div className={styles.text}>{props.message}</div>
    </div>
  );
};

export default Post;
