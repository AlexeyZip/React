import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';




const MyPosts = (props) => {

  let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  }

  return <div className={s.postsBlock}>
    My posts
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div className="">
        <button onClick={onAddPost}>Add post</button>
        {/* <button>Remove</button> */}
      </div>
    </div>
    <div className={s.posts}>
      {postsElement}
      {/* <Post message={posts[0].message} likesCount = {posts[0].likesCount}/>
        <Post message={posts[1].message} likesCount = {posts[1].likesCount}/> */}
    </div>
  </div>


}
export default MyPosts