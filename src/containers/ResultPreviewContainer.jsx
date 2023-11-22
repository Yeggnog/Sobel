import {useEffect} from 'react';
import styles from './ImportContainer.module.css';
import dummyIcon from '../assets/debug_img/download_icon.png';
import '../components/SobelWebGL.js';
import '../App.css';

function ResultPreview(props) {
    useEffect(() => {
        //main();
        //temmieGetsMoney4Colleg();
    }, []);

    const handleExport = () => {
        console.log('image export code goes here');
    }
    async function handleCopy() {
        const blob = await getFileFromURL(props.imgToPreview);

        let data = [new ClipboardItem({ [blob.type]: blob })];
        navigator.clipboard.write(data).then(
            () => {},
            (err) => {
                // error state
                console.log('threw error '+err);
            },
        );
    }

    async function getFileFromURL(url){
        let response = await fetch(url);
        let blob = await response.blob();
        return blob;
    }

    /*
    <img id='outputPreview' className={styles.previewImg} src={props.imgToPreview} alt='A preview of the post-conversion image' />
    */

    return (
        <section className='mainContent'>
            <div className={styles.panelRowLeft}>
                <button id='import' onClick={props.onOpenImportModal}>
                    <img src={dummyIcon} alt='Button to open the image import menu' />
                </button>
                <button id='export' onClick={handleExport}>
                    <img src={dummyIcon} alt='Button to export the result to your computer' />
                </button>
                <button id='copy' onClick={handleCopy}>
                    <img src={dummyIcon} alt='Button to copy the result to the clipboard' />
                </button>
            </div>


            
            <div className={styles.panelRowLeft}>
                Bottom text
            </div>
        </section>
    );
}
export default ResultPreview;