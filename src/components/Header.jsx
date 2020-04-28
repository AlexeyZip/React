import React from 'react';
import h from './Header.module.css'
const Header = () => {
    return <header className={h.Header}>
        <img className={h.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png' />
    </header>
}

export default Header