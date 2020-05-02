//File where container component around 'MyPosts' is created. In this component program does requests to store to add post and to change text in textarea

import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let profilePage = props.store.getState().profilePage;

    //send a request to store to add post
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    //send a request to store to chane textarea value
    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} profilePage={profilePage}/>
    );
}

export default MyPostsContainer;