import styles from './Users.module.css';
import avatar from "../../img/avatar.png";

import * as axios from "axios";

import { useEffect, useState } from "react";

let Users = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
         setItems(response.data.items);
      });
  }, []);

  return <div className={styles.users}>
      {items.map(item=>{
          <div className={styles.user} key={item.id}>
              <img src={avatar} alt="avatar" />
                
          </div>
      })}
  </div>;
};

export default Users;