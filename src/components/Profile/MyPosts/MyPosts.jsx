import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className='posts'>
                <Post message = 'Hi, how are you?' like = '15'/>
                <Post message = 'It`s my first post' like = '10'/>
                <Post message = 'Hello react!' like = '20'/>
            </div>
        </div>

    );
}

export default MyPosts;
