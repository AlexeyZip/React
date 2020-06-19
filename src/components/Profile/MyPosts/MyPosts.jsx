import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {

  let postsElement = props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
  <div className={s.postsBlock}>
     <h1>My posts</h1>
      <AddPostFormRedux onSubmit={onAddPost} />
    <div className={s.posts}>
      {postsElement}
    </div>
  </div>
  )
}

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
          <div>
            <Field component="textarea" name="newPostText" placeholder="Enter your post" />
          </div>
          <div><button>Add post</button></div>
        </form>
}

const AddPostFormRedux = reduxForm({ form: "AddNewPostForm" })(AddPostForm);

export default MyPosts