import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItems from './DialogItem/DialogItem';
import MessageItems from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <MessageItems message={message.message} id={message.id} />);
    
    let newDialogElement = React.createRef();
    let send = () => {
        let textmessage = newDialogElement.current.value;
        alert(textmessage);
    }
   
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
                
            </div>
            

            <div className={s.messages}>
                {messagesElements} 
                <div className=""><textarea ref={newDialogElement}></textarea></div>  
                <div className=""><button onClick={send}>send message</button></div> 
            </div>
           
            
        </div>
    )

}

export default Dialogs;