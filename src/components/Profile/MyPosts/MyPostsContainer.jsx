import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {
  let state = props.store.getState();
  // let postsElement = props.posts.map(post=><Post message={post.message} likesCount = {post.likesCount}/>);

  // let newPostElement = React.createRef();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>


}
export default MyPostsContainer