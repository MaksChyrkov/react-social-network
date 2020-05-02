//File where container component around 'MyPosts' is created.
//In this component program does requests to store to add post and to change text in textarea
//It uses context to get 'store'

import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let profilePage = store.getState().profilePage;

                //send a request to store to add post
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                //send a request to store to chane textarea value
                let updateNewPostText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return (
                    <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} profilePage={profilePage}/>
                )
            }
        }

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;