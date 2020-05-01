//File where component MyPosts is described. In this component program does requests to add post and to change text in textarea

import React from "react";
import css from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer.js";

const MyPosts = (props) => {

    //create component with .map() with same code but different data
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    //send a request to store to add post
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    //send a request to store to chane textarea value
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder="Enter your post..."/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;