import styles from "./Users.module.css";
import avatar from "../../img/avatar.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
          <NavLink to={"/profile/" + user.id}>
            <img
              className={styles.avatar}
              src={user.photos.small != null ? user.photos.small : avatar}
              alt="avatar"
            />
          </NavLink>
          <div>{user.name}</div>
          {user.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.disabledInFollowingProgress(true,user.id);
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "7aa905cd-5ce9-42b5-be7e-658eee3aec0e",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(user.id);
                    }
                    props.disabledInFollowingProgress(false,user.id);
                  });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.disabledInFollowingProgress(true,user.id);
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "7aa905cd-5ce9-42b5-be7e-658eee3aec0e",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(user.id);
                    }
                    props.disabledInFollowingProgress(false,user.id);
                  });
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
