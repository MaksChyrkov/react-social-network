import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: "15"},
            {id: 2, message: "It`s my first post", likesCount: "10"},
            {id: 3, message: "Hello react!", likesCount: "20"}
        ]
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
}

export let addPost = (messagePost) => {
    let newPost = {
        id: 5,
        message: messagePost,
        likesCount: "0"
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;