import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Kostya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Nastya</NavLink>
            </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Leha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Roma</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Natasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7"> Galya</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Tell me why?</div>
            </div>
        </div>
    )

}

export default Dialogs;