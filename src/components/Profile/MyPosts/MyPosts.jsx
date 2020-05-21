import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
  debugger;
  return <div>
      My posts
    <div>
        {/* new posts */}
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
    </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' amount = "2"/>
        <Post message="It's my first post" amount = "3"/>
      </div>
    </div>


}
export default MyPosts