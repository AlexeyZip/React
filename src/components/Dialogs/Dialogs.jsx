import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';

const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map(message => <MessageItems message={message.message} id={message.id} />);

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