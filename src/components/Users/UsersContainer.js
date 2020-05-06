//File where container component around 'Users' is created.
//In this component program does requests to store to follow or unfollow someone or to set users
//Used 'connect' to communicate between store and component

import {connect} from "react-redux";
import Users from "./Users";
import {followToggleActionCreator, setUsersActionCreator} from "../../redux/usersReducer";

//get users from state
let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

//dispatch actions to store
let MapDispatchToProps = (dispatch) => {
    return {
        followToggle: (id) => {
            dispatch(followToggleActionCreator(id));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

//providing connection between component and store
const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;