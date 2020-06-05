const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState =  {
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

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
             return {
                ...state,
                newMessageText: '',
                messages: [...state.messages,{id: 8, message: newMessage}]
            };
    
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
               ...state,
               newMessageText: action.newMessage
           }
            
        
            default:
                return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;