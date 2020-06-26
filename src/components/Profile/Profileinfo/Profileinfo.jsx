import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (profile, status,updateStatus) => {
  if (profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <img className={s.ava} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

      </div>
    </div>
  )
}
export default ProfileInfo