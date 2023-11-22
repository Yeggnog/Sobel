import React from "react";
import debugImg from '../assets/debug_img/color_icon.png'
import styles from './Modifiers.module.css';

function ModifierChip({id, value, onUpdate}){
    return (
        <div id={id} className={styles.chipBody}>
            <div className={styles.chipRow}>
                <input className={styles.modifierSlider} type='range' id={id + '_multSlider'} onChange={onUpdate} value={value} />
                <img className={styles.modifierImg} src={debugImg} />
            </div>
            <input className={styles.modifierTwiddle} type='number' id={id + '_multiplier'} onChange={onUpdate} value={value} />
        </div>
    );
}
export default ModifierChip;