import React from 'react';
import s from './Post.module.css'
const Post = () => {
  return (

    <div className={s.item}>
      <img src="https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DsSd-Stim_hfhdY_jf-jfY-%D0%A5%D0%B0%D1%81%D0%BA%D0%B8.jpg" alt=""/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus dignissimos sit rerum voluptates accusantium voluptate iure quae? Architecto earum nihil corrupti rem cupiditate deleniti illo recusandae, consectetur quas est.
      <div>
        <span>like</span>
      </div>
    </div>
  )
}
export default Post