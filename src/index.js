import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "My first post", likes: "4"},
    {id: 2, message: "My second post", likes: "3"},
    {id: 3, message: "My third post", likes: "8"},
];

let dialogs = [
    {id: 1, name: "Egorov"},
    {id: 2, name: "Zhilin"},
    {id: 3, name: "Zolotarev"},
];

let messages = [
    {id: 1, message: "yo"},
    {id: 2, message: "hi"},
    {id: 3, message: "dude"},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
