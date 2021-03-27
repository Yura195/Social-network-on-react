import styles from './UsersItem.module.css';

import * as axios from "axios";

let UsersItem = (props) => {
  
  if (props.users.length === 0) {
    axios.get("https://react-social-b0f52-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
         props.setUsers(response.data)
      });
  }

  return (
      <div></div>
  )
};

export default UsersItem;
