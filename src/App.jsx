import React, {useState} from 'react';
import debugImg from './assets/debug_img/astr2.png';
import ModifierList from './containers/ModifierListContainer';
import ImageImportContainer from './containers/ImageImportContainer';
import ResultPreview from './containers/ResultPreviewContainer';
import './App.css';

function App() {
    const [image, setImage] = useState(debugImg);

    const openImportModal = () => {
        document.getElementById('importModal').showModal();
    }
    const handleImport = (imported) => {
        setImage(imported);
        document.getElementById('importModal').close();
    }
    
    return (
        <>
            <ModifierList />
            <ImageImportContainer onImport={handleImport} />

            <section className='topBanner'>
                <p>CSS is my passion</p>
            </section>

            <ResultPreview imgToPreview={image} onOpenImportModal={openImportModal} />
            <canvas id='GLCanvas' width='600' height='600'></canvas>

            <section className='bottomBanner'>
                This is not a footer, nothing to see here
            </section>
        </>
    );
}
export default App;