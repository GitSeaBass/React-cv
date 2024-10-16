import './InfoDisplay.css'
import About from './About';
import Work from './Work';

function InfoDisplay({infoRef, display, changeAbout, changeWork}) {

    return (
        <div className='display-background'>
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
                        <button className='selector-button off' onClick={changeWork}>Work Experience</button>
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