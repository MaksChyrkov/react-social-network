import React from "react";
import css from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={css.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={css.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;