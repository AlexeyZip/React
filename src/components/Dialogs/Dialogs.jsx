import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Redirect } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItems name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <MessageItems message={message.message} key={message.id} id={message.id} />);
    let newDialogElement = state.newMessageText;


    
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className="">{messagesElements}</div>
            </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )

}

const AddMessageForm = (props) => {
    return (
        <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div><button>send message</button></div>
        </form>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;