//File where the main logic of following a person or setting users

//constants with type of action
const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SET_USERS = "SET-USERS";

//initialize state for the first iteration
let initialState = {
    users: []
}

//function in which according to the incoming type program follows or unfollows a user or sets users
const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: !u.isFollowed}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

//function that is called in components exactly to change the definition of 'isFollowed'
export const followToggleActionCreator = (userId) => {
    return {
        type: FOLLOW_TOGGLE,
        userId
    }
}

//function that is called in components exactly to set users
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;