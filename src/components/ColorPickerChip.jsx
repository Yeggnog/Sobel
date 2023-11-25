import React from "react";
import styles from './Modifiers.module.css';

function ColorPickerChip({id, lineColor, onLineColorChanged, BGColor, onBGColorChanged}) {
    return (
        <div id={id} className={styles.chipBody}>
            <div className={styles.colorPickRow}>
                <input type='color' id='lineColor' className={styles.colorPickItem} onChange={onLineColorChanged} value={lineColor} />
                <input type='color' id='BGColor' className={styles.colorPickItem} onChange={onBGColorChanged} value={BGColor} />
            </div>
        </div>
    );
}
export default ColorPickerChip;