import styles from './AddPost.module.css';

const AddPost = () => {
    return (
        <div className={styles.posts}>
            <textarea className={styles.textarea} placeholder="Write some text"></textarea>
            <button className={styles.btn}>Add new post</button>
        </div>
    )
}

export default AddPost