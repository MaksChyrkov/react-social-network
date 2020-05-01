//File where component Post is described

import React from "react";
import css from "./Post.module.scss";

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;