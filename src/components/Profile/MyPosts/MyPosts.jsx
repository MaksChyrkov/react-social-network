import React from "react";
import css from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "It`s my first post", likesCount: "10"},
        {id: 3, message: "Hello react!", likesCount: "20"}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
