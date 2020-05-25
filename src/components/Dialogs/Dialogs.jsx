import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <MessageItems message={message.message} id={message.id} />);
    
    let newDialogElement = React.createRef();
    
    
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newDialogElement.current.value;
        props.updateNewMessageText(text);
    }
  
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
                
            </div>
            

            <div className={s.messages}>
                {messagesElements} 
                <div className="">
                    <textarea onChange={onMessageChange} ref={newDialogElement} value={props.newMessageText}/>
                </div>  
                <div className=""><button onClick={addMessage}>send message</button></div> 
            </div>
           
            
        </div>
    )

}

export default Dialogs;