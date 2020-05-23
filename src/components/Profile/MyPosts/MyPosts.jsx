import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
 
  let posts =  [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 2},

  ]

  let postsElement = posts.map(post=><Post message={post.message} likesCount = {post.likesCount}/>);

  

  return <div className={s.postsitem}>
      My posts
    <div>
        <div>
        <textarea></textarea>
        </div>
        <div className="">
        <button>Add post</button>
        <button>Remove</button>
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