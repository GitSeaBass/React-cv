import './InfoDisplay.css'
import { useState } from 'react';
import About from './About';
import Work from './Work';

function InfoDisplay({aboutRef, workRef}) {
    const [display, setDisplay] = useState('about')
    const changeAbout = () => {
        setDisplay('about')
    }
    const changeWork = () => {
        setDisplay('work')
    }

    return (
        <div className='display-background'>
            <div className='display-container'>
                <div className='display-selector'>
                    {display === 'about'?
                    <>
                        <button className='selector-button off' onClick={changeAbout}>About</button>
                        <button className='selector-button on' onClick={changeWork}>Work Experience</button>
                    </>
                    :
                    <>
                        <button className='selector-button on' onClick={changeAbout}>About</button>
                        <button className='selector-button off' onClick={changeWork}>Work Experience</button>
                    </>
                    }     
                </div>

                <div className='display-main'>
                    {display === 'about'?
                        <About aboutRef={aboutRef}/>
                    :
                        <Work workRef={workRef}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoDisplay;