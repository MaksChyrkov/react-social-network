//File where component Dialogs is described. In this component program does requests to the container component and brings data there

import React from "react";
import css from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    //create components with .map() with same data but different code
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);

    //send a request to container component to send message
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    //send a request to container component to chane textarea value
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={props.newMessageText}
                                   placeholder="Enter your message..."/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;