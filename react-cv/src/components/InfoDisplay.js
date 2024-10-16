import './InfoDisplay.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import About from './About';
import Work from './Work';

function InfoDisplay({infoRef, display, changeAbout, changeWork}) {
    const {bgColor} = useContext(DisplayContext)

    return (
        <div className='display-background' style={{backgroundColor: bgColor}}>
            <div className='display-container' ref={infoRef}>
                <div className='display-selector'>
                    {display === 'about'?
                    <>
                        <button className='selector-button off' onClick={changeAbout}>About</button>
                        <button className='selector-button on' onClick={changeWork}>Work Experience</button>
                    </>
                    :
                    <>
                        <button className='selector-button on' onClick={changeAbout}>About</button>
                        <button className='selector-button of6f' onClick={changeWork}>Work Experience</button>
                    </>
                    }     
                </div>

                <div className='display-main'>
                    {display === 'about'?
                        <About />
                    :
                        <Work />
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoDisplay;