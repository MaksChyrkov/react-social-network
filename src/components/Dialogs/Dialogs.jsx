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
    return (
        <div className={css.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Kostya'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "What a sunny weather"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;