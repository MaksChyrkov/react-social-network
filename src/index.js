import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Maks'},
    {id: 2, name: 'Ilya'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Anton'},
    {id: 6, name: 'Kostya'}
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: "What a sunny weather"}
]

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: "15"},
    {id: 2, message: "It`s my first post", likesCount: "10"},
    {id: 3, message: "Hello react!", likesCount: "20"}
]
ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
