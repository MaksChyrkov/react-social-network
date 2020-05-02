//Main .js file in which we render main component and page at all

import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

//function to be called to rerender entire tree
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

//render page when it loads for the first time
rerenderEntireTree(store.getState());

//rerender entire tree every time when state is changed
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();