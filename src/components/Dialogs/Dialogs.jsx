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

    let dialogsData = [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Kostya'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "What a sunny weather"}
    ]

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={css.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
}


export default Dialogs;