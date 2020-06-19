import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  
  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <MyPostsContainer/>
    {/* posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} */}
  </div>

}
export default Profile;