import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

   
   
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
       
        props.store.dispatch(updateNewMessageTextActionCreator(text));
        
    }
  
    return (<Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>)

}

export default DialogsContainer;