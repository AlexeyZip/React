import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';




const MyPostsContainer = (props) => {
  // let state = props.store.getState();
  // let postsElement = props.posts.map(post=><Post message={post.message} likesCount = {post.likesCount}/>);

  // let newPostElement = React.createRef();



  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
      
        let onPostChange = (text) => {
          // let text = newPostElement.current.value;
          // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
        return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
      }
    }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer