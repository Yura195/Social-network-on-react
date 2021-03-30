import styles from "./Users.module.css";
import avatar from "../../img/avatar.png";

import * as axios from "axios";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
       this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize/200
    );
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
                className={this.props.currentPage === page && styles.select}
                onClick={() => this.onPageChanged(page)}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div className={styles.user} key={user.id}>
            <img src={avatar} alt="avatar" />
            <div>{user.name}</div>
            {user.followed ? (
              <button
                onClick={() => {
                  this.props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
