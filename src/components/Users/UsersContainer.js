import { connect } from "react-redux";
import {
  followCreator,
  setUsersCreator,
  unfollowCreator,
} from "../../redux/users-reducer";

import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowCreator(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
