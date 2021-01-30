import styles from "./Post.module.css"
const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.point}></div>
      <div className={styles.text}>Hi</div>
      <div className={styles.point}></div>
      <div className={styles.text}>How are you?</div>
    </div>
  )
}

export default Post
