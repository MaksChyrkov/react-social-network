//File where container component around 'Dialogs' is created. In this component program does requests to store to send message and to change text in textarea

import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    //send a request to store to send message
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    //send a request to store to chane textarea value
    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} dialogsPage={dialogsPage}/>
    );
}

export default DialogsContainer;