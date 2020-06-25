import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const MyPosts = React.memo(props => {
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
})

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea} name="newPostText" placeholder="Enter your post"
            validate={[required, maxLength10, minLength2]} />
          </div>
          <div><button>Add post</button></div>
        </form>
}

const AddPostFormRedux = reduxForm({ form: "AddNewPostForm" })(AddPostForm);

export default MyPosts