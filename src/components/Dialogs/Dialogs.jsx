import React from 'react';
import css from './Dialogs.module.scss';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.dialog + ' ' + css.active}>
                    Maks
                </div>
                <div className={css.dialog}>
                    Ilya
                </div>
                <div className={css.dialog}>
                    Vova
                </div>
                <div className={css.dialog}>
                    Sasha
                </div>
                <div className={css.dialog}>
                    Kostya
                </div>
                <div className={css.dialog}>
                    Dima
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