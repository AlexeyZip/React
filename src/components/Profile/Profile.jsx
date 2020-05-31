import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
  return <div>
    <Profileinfo />
    <MyPostsContainer store={props.store}/>
    {/* posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} */}
  </div>

}
export default Profile;