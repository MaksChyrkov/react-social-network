import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: "15"},
                {id: 2, message: "It`s my first post", likesCount: "10"},
                {id: 3, message: "Hello react!", likesCount: "20"}
            ],
            newPostText: ""
        },

        dialogsPage: {
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
    },

    _callSubscriber() {

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;