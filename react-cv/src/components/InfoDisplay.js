import './InfoDisplay.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import About from './About';
import Work from './Work';

function InfoDisplay({infoRef, display, changeAbout, changeWork}) {
    const {backColor, bgColor, borderColor, boxBackgroundColor, textColor} = useContext(DisplayContext)

    return (
        <div className='display-background' style={{backgroundColor: bgColor}}>
            <div className='display-container' ref={infoRef} style={{border: borderColor, backgroundColor: boxBackgroundColor, color: textColor}}>
                <div className='display-selector' style={{backgroundColor: backColor, border: borderColor}}>
                    {display === 'about'?
                    <>
                        <button className='selector-button off' onClick={changeAbout} style={{backgroundColor: backColor}}>About</button>
                        <button className='selector-button on' onClick={changeWork}>Work Experience</button>
                    </>
                    :
                    <>
                        <button className='selector-button on' onClick={changeAbout}>About</button>
                        <button className='selector-button off' onClick={changeWork} style={{backgroundColor: backColor}}>Work Experience</button>
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