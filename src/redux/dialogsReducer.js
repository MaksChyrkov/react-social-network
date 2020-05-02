//File where the main logic of sending message and updating text in textarea is situated

//constants with type of action
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

//initialize state for the first iteration
let initialState = {
    dialogs: [
        {id: 1, name: "Maks"},
        {id: 2, name: "Ilya"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Anton"},
        {id: 6, name: "Kostya"}
    ],

        messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What a sunny weather"}
    ],
        newMessageText: ""
}

//function in which according to the incoming type program sends new message or updates text in textarea
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

//function that is called in components exactly to begin the process of sending a message
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

//function that is called in components exactly to begin the process of updating text in textarea
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;