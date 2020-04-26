import React from 'react';
import css from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
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
                <Post message='Hi, how are you?' likesCount='15'/>
                <Post message='It`s my first post' likesCount='10'/>
                <Post message='Hello react!' likesCount='20'/>
            </div>
        </div>
    );
}

export default MyPosts;
