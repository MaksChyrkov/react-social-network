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
            ]
        }
    },

    _callSubscriber() {

    },

    getState() {
        return this._state;
    },

    addPosts() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: "0"
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;