import React from 'react';
import css from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <div className={css.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
