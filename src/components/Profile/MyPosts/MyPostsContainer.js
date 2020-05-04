//File where container component around 'MyPosts' is created.
//In this component program does requests to store to add post and to change text in textarea
//Used 'connect' to communicate between store and component

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//get posts and newPostText from state
let MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

//dispatch actions to store
let MapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

//providing connection between component and store
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;