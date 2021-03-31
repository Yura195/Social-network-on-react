import styles from "./Users.module.css";
import avatar from "../../img/avatar.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 200);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <div>
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === page ? styles.select : undefined}
              onClick={() => props.onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div className={styles.user} key={user.id}>
          <NavLink to={'/profile/'+user.id}>
            <img
              className={styles.avatar}
              src={user.photos.small != null ? user.photos.small : avatar}
              alt="avatar"
            />
          </NavLink>
          <div>{user.name}</div>
          {user.followed ? (
            <button
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
