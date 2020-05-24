import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElement = props.posts.map(post=><Post message={post.message} likesCount = {post.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return <div className={s.postsBlock}>
      My posts
    <div>
        <div>
        <textarea ref={newPostElement}></textarea>
        </div>
        <div className="">
        <button onClick={addPost}>Add post</button>
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