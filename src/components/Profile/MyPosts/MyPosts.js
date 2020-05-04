//File where component MyPosts is described. In this component program does requests to the container component and brings data there

import React from "react";
import css from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

    //create component with .map() with same data but different code
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    //send a request to container component to add post
    let addPost = () => {
        props.addPost();
    }

    //send a request to container component to chane textarea value
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}
                              placeholder="Enter your post..."/>
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