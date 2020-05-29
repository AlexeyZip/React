// import { rerenderEntireTree } from "../render";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 2 }
            ],

            newPostText: 'react/redux'

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

            newMessageText: 'react',

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
    },

    // _addPost(){let newPost = {
    //             id: 5,
    //             message: this._state.profilePage.newPostText,
    //             likesCount: 0
    //         };
    //         this._state.profilePage.posts.push(newPost);
    //         this._state.profilePage.newPostText = '';
    //         this._callSubscriber(this._state);}
    // _updateNewPostText(newText){
    //     this._state.profilePage.newPostText = action.newText;
    //     this._callSubscriber(this._state);
    // }
    // _addMessage(){
    //     let newMessage = {
    //         id: 8,
    //         message: this._state.dialogsPage.newMessageText
    //     };

    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // }
    // _updateNewMessageText(newText){
    //     this._state.dialogsPage.newMessageText = action.newMessage;
    //         this._callSubscriber(this._state);
    // }
    
    _callSubscriber() {
        console.log('state changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 8,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }

}

export default store;
window.store = store;
