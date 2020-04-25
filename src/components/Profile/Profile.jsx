import React from 'react';
import css from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return(
        <div className={css.content}>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
