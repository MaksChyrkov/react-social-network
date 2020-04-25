import React from 'react';
import css from './Header.module.scss';

const Header = () => {
    return(
        <header className={css.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/512px-Microsoft_Edge_logo_%282019%29.svg.png' />
        </header>
    );
}

export default Header;
