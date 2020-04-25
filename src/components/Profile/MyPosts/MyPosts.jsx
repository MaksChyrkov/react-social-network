import React from 'react';
import css from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post message = 'Hi, how are you?' likesCount = '15'/>
                <Post message = 'It`s my first post' likesCount = '10'/>
                <Post message = 'Hello react!' likesCount = '20'/>
            </div>
        </div>
    );
}

export default MyPosts;
