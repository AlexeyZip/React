import React from 'react';
import s from './Friends.module.css';
import { NavLink } from "react-router-dom";
import FriendItems from './FriendsItem/FriendsItem';




const Friends = (props) => {

let friendsElements = props.state.friends.map(friend => <FriendItems name={friend.name} id={friend.id} />);
    
    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {friendsElements} 
            </div> 
        </div>
    )

}

export default Friends;