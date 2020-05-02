//File where container component around 'Dialogs' is created.
//In this component program does requests to store to send message and to change text in textarea
//It uses context to get 'store'

import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let dialogsPage = store.getState().dialogsPage;

                //send a request to store to send message
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                //send a request to store to chane textarea value
                let updateNewMessageText = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                return (
                    <Dialogs sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}
                             dialogsPage={dialogsPage}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;