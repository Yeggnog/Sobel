import React, {useEffect} from "react";
import styles from './Modifiers.module.css';

function LineWidthChip({id, lineColor, BGColor, value, onUpdate}){
    useEffect(() => {
        // hot-resize the slider display parameters to match the slider input
        let sliderRect = document.getElementById('lineWidthSlider').getBoundingClientRect();
        document.getElementById('lineWidthDisplay').style=`border-top: ${sliderRect.height}px solid ${BGColor}; border-right: ${sliderRect.width}px solid ${lineColor}`
    }, [lineColor, BGColor]);

    return (
        <div id={id} className={styles.chipBody}>
            <div className={styles.chipRow}>
                <div className={styles.lineWidthSlider}>
                    <input className={styles.dualSliderOverlay} type='range' id='lineWidthSlider' onChange={onUpdate} value={value} />
                    <span className={styles.dualSliderUnderlay} id='lineWidthDisplay'></span>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.chipRow}>
                <label>
                    Minimum line Width
                    <input className={styles.modifierTwiddle} type='number' id='minWidthTwiddle' onChange={onUpdate} value={value} />
                </label>
                <label>
                    Maximum line Width
                    <input className={styles.modifierTwiddle} type='number' id='maxWidthTwiddle' onChange={onUpdate} value={value} />
                </label>
            </div>
        </div>
    ); // TODO: fix positioning of BG element via CSS
}
export default LineWidthChip;