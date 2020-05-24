import React from 'react';
import s from './../Dialogs.module.css';




const MessageItems = (props) => {
    return (
        
        <div className={s.message}>{props.message}</div>
        
        
    )
}




export default MessageItems;