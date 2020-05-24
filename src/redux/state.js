import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 2 }
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
} 

export default state;