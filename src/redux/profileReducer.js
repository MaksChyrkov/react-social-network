//File where the main logic of adding post and updating text in textarea is situated

//constants with type of action
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//initialize state for the first iteration
let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "It`s my first post", likesCount: "10"},
        {id: 3, message: "Hello react!", likesCount: "20"}
    ],
    newPostText: ""
}

//function in which according to the incoming type program adds new post or updates text in textarea
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: "0"
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

//function that is called in components exactly to begin the process of adding post
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

//function that is called in components exactly to begin the process of updating text in textarea
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;