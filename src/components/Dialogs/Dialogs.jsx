import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Redirect } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItems name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <MessageItems message={message.message} key={message.id} id={message.id} />);
    let newDialogElement = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
        
    }

    if (!props.isAuth) return <Redirect to = {'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className="">
                    <textarea onChange={onMessageChange} value={newDialogElement} />
                </div>
                <div><button onClick={addMessage}>send message</button></div>
            </div>

        </div>
    )

}

export default Dialogs;