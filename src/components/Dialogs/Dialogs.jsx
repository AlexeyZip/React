import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    { id: 1, name: 'Kostya' },
    { id: 2, name: 'Leha' },
    { id: 3, name: 'Roma' },
    { id: 4, name: 'Andrey' },
    { id: 5, name: 'Natasha' },
    { id: 6, name: 'Nastya' },
    { id: 7, name: 'Galya' }
]
let messagesData = [
    { id: 1, message: 'Hi!!!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Tell' },
    { id: 4, message: 'Tell me' },
    { id: 5, message: 'why?' },
    { id: 6, message: 'Common' },
    { id: 7, message: 'Yo!' }
    
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData [0].name} id={dialogsData [0] .id} />
                <DialogItem name={dialogsData [1].name} id={dialogsData [1] .id} />
                <DialogItem name={dialogsData [2].name} id={dialogsData [2] .id} />
                <DialogItem name={dialogsData [3].name} id={dialogsData [3] .id} />
                <DialogItem name={dialogsData [4].name} id={dialogsData [4] .id} />
                <DialogItem name={dialogsData [5].name} id={dialogsData [5] .id} />
                <DialogItem name={dialogsData [6].name} id={dialogsData [6] .id} />
            </div>

            <div className={s.messages}>
                <Message message={messagesData [0].message} />
                <Message message={messagesData [1].message} />
                <Message message={messagesData [2].message} />
                <Message message={messagesData [3].message} />
                <Message message={messagesData [4].message} />
                <Message message={messagesData [5].message} />
                <Message message={messagesData [6].message} />
            </div>
        </div>
    )

}

export default Dialogs;