import React from 'react';
import './Post.scss';

const Post = (props) => {
    return(
        <div className='item'>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
             {props.message}
              <div>
                  <span>likes: {props.like}</span>
              </div>
        </div>
    );
}

export default Post;
