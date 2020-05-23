import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messages.map(message => <MessageItems message={message.message} id={message.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}    
            </div>
        </div>
    )

}

export default Dialogs;