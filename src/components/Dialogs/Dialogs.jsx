import React from 'react';
import css from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.dialog + ' ' + css.active}>
                    <NavLink to="/dialogs/1">Maks</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/2">Ilya</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/3">Vova</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/5">Kostya</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to="/dialogs/6">Dima</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>How are you?</div>
                <div className={css.message}>Yo</div>
            </div>
        </div>
    );
}


export default Dialogs;