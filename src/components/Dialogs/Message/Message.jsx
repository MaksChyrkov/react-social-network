import React from "react";
import css from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    );
}

export default Message;