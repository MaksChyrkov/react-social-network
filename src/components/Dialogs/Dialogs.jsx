import React from 'react';
import css from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={css.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <DialogItem name="Maks" id="1"/>
                <DialogItem name="Ilya" id="2"/>
                <DialogItem name="Dima" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Anton" id="5"/>
                <DialogItem name="Kostya" id="6"/>
            </div>
            <div className={css.messages}>
                <Message message ="Hi!"/>
                <Message message ="How are you?"/>
                <Message message ="What a sunny weather"/>
            </div>
        </div>
    );
}


export default Dialogs;