//File where component Header is described

import React from "react";
import css from "./Header.module.scss";

const Header = (props) => {
    return (
        <header className={css.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
        </header>
    );
}

export default Header;