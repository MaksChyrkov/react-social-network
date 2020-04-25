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
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    );
}

export default MyPosts;
