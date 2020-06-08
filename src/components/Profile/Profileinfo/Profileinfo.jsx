import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (<div>
    <div>
      <img className={s.fon} src='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <div className={s.ava}>
        <img src={props.profile.photos.large}/>
        <img className={s.ava} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' /></div>
      </div>
  </div>
  )
}
export default ProfileInfo