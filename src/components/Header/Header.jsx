import React from 'react';
import s from './Header.module.css'
const Header = () => {
    return <header className={s.Header}>
        <div className={s.logo}>
               <h1><a href="#">YoNet</a></h1> 
        </div>

    </header>
}

export default Header