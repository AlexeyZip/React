import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts =  [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my first post', likesCount: 2},

]

let dialogs = [
  { id: 1, name: 'Kostya' },
  { id: 2, name: 'Leha' },
  { id: 3, name: 'Roma' },
  { id: 4, name: 'Andrey' },
  { id: 5, name: 'Natasha' },
  { id: 6, name: 'Nastya' },
  { id: 7, name: 'Galya' }
]

let messages = [
  { id: 1, message: 'Hi!!!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Tell' },
  { id: 4, message: 'Tell me' },
  { id: 5, message: 'why?' },
  { id: 6, message: 'Common' },
  { id: 7, message: 'Yo!' }

]

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
