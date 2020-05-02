//File in which redux store is initialized

import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

//redux function to call reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

//create store with help of redux
let store = createStore(reducers);

export default store;