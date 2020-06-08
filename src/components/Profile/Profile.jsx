import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
  return <div>
    <ProfileInfo profile={props.profile} />
    <MyPostsContainer/>
    {/* posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} */}
  </div>

}
export default Profile;