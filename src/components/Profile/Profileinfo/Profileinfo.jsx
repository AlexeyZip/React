import React from 'react';
import s from './Profileinfo.module.css'

const Profileinfo = () => {
  return (<div>
    <div>
      <img className={s.fon} src='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <div className="ava"><img className={s.ava} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' /></div>
      </div>
  </div>
  )
}
export default Profileinfo