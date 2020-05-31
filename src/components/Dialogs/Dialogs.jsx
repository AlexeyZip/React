import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <MessageItems message={message.message} id={message.id} />);
    // let newDialogElement = React.createRef();
    let newDialogElement = state.newMessage;
   
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
        // let text = newDialogElement.current.value;
        // let action = updateNewMessageTextActionCreator(text) 
        // props.dispatch(action);
        // props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text});
    }
  
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements} 
                <div className="">
                    <textarea onChange={onMessageChange}  value={newDialogElement}/>
                </div>  
                <div><button onClick={addMessage}>send message</button></div> 
            </div>
           
        </div>
    )

}

export default Dialogs;