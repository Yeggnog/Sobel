import React, {useState} from 'react';
import ModifierChip from '../components/ModifierChip';
import LineWidthChip from '../components/LineWidthChip';
import ColorPickerChip from '../components/ColorPickerChip';
import '../App.css';

function ModifierList() {
    const [hueMod, setHueMod] = useState(50);
    const handleHueUpdate = (event) => {
        setHueMod(event.target.value);
    }
    const [satMod, setSatMod] = useState(50);
    const handleSatUpdate = (event) => {
        setSatMod(event.target.value);
    }
    const [valueMod, setValueMod] = useState(50);
    const handleValueUpdate = (event) => {
        setValueMod(event.target.value);
    }
    const [colorMod, setColorMod] = useState(50);
    const handleColorUpdate = (event) => {
        setColorMod(event.target.value);
    }
    const [greyMod, setGreyMod] = useState(50);
    const handleGreyUpdate = (event) => {
        setGreyMod(event.target.value);
    }

    const [lineColor, setLineColor] = useState('#ffffff');
    const [BGColor, setBGColor] = useState('#000000');
    const handleLineColorChange = (event) => {
        setLineColor(event.target.value);
    }
    const handleBGColorChange = (event) => {
        setBGColor(event.target.value);
    }

    return (
        <div className='modifierList'>
            <ModifierChip id='hue' value={hueMod} onUpdate={handleHueUpdate} />
            <ModifierChip id='saturation' value={satMod} onUpdate={handleSatUpdate} />
            <ModifierChip id='value' value={valueMod} onUpdate={handleValueUpdate} />
            <ModifierChip id='color' value={colorMod} onUpdate={handleColorUpdate} />
            <ModifierChip id='greyscale' value={greyMod} onUpdate={handleGreyUpdate} />
            <LineWidthChip id='lineWidth' lineColor={lineColor} BGColor={BGColor} />
            <ColorPickerChip id='colorPicker' lineColor={lineColor} onLineColorChanged={handleLineColorChange} BGColor={BGColor} onBGColorChanged={handleBGColorChange} />
        </div>
    );
}
export default ModifierList;