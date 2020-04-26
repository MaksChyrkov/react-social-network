import React from "react";
import css from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Dialogs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
