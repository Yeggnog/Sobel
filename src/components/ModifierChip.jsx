import React from "react";
import styles from './Modifiers.module.css';

function ModifierChip({id, value, icon, onUpdate}){
    return (
        <div id={id} className={styles.chipBody}>
            <div className={styles.chipRow}>
                <label for={id + '_multSlider'}>Slider to control the {id} of the final image</label><br />
                <input className={styles.modifierSlider} type='range' id={id + '_multSlider'} onChange={onUpdate} value={value} />
                <img className={styles.modifierImg} src={icon} />
            </div>
            <input className={styles.modifierTwiddle} type='number' id={id + '_multiplier'} onChange={onUpdate} value={value} />
        </div>
    );
}
export default ModifierChip;