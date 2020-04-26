import React from 'react';
import css from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    let messagesData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It`s my first post', likesCount: '10'},
        {id: 3, message: "Hello react!", likesCount: '20'}
    ]

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
                <Post message={messagesData[0].message} likesCount={messagesData[0].likesCount}/>
                <Post message={messagesData[1].message} likesCount={messagesData[1].likesCount}/>
                <Post message={messagesData[2].message} likesCount={messagesData[2].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
