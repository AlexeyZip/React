import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 2 }
        ],

        newPostText: [
            'react/redux'
        ]
    },

    friendsPage: {
        friends: [
            { id: 1, name: 'Kostya' },
            { id: 2, name: 'Leha' },
            { id: 3, name: 'Roma' },
            { id: 4, name: 'Andrey' },
            { id: 5, name: 'Natasha' },
            { id: 6, name: 'Nastya' },
            { id: 7, name: 'Galya' }
        ]
    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi!!!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Tell' },
            { id: 4, message: 'Tell me' },
            { id: 5, message: 'why?' },
            { id: 6, message: 'Common' },
            { id: 7, message: 'Yo!' }
        ],

        newMessageText: [
            'only react'
        ],
        dialogs: [
            { id: 1, name: 'Kostya' },
            { id: 2, name: 'Leha' },
            { id: 3, name: 'Roma' },
            { id: 4, name: 'Andrey' },
            { id: 5, name: 'Natasha' },
            { id: 6, name: 'Nastya' },
            { id: 7, name: 'Galya' }
        ]
    
    }


}
window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
} 
export let addMessage = () => {
    let newMessage = {
        id: 2,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
   
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export default state;