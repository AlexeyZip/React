import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
      <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
      <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
      <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
      <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
      <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.active}>
          Friends
        </NavLink>
        <div className={s.friendsimg}>
        <div className={s.item}><NavLink to="/friends/1" activeClassName={s.active}>
          <img className={s.img} src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" />
        </NavLink></div>
        <div className={s.item}><NavLink to="/friends/2" activeClassName={s.active}>
          <img className={s.img} src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" />
        </NavLink></div>
        <div className={s.item}><NavLink to="/friends/3" activeClassName={s.active}>
          <img className={s.img} src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" />
        </NavLink></div>
        </div>
       
      </div>
    </nav>
  )
}

export default Navbar