//File in which general data is located

//Import reducers
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

//Object store in which data is located
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

    //rerender entire tree
    _callSubscriber() {

    },

    //get state
    getState() {
        return this._state;
    },

    //assign a value to _callSubscriber(), which function to call
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //call reducer functions with parameter action
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        //rerender entire tree with new state
        this._callSubscriber(this._state);
    }
}

export default store;