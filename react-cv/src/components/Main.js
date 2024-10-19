import './Main.css'
import {  useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import PDF from '../assets/Resume.pdf'
import profile from '../assets/Profile.jpeg'
import sun from "../assets/Sun transparent.png"
import moon from "../assets/Moon.png"
import NavBar from "./NavBar";

function Main({mainRef, infoRef, projectsRef, changeAbout, changeWork}) {
    const {isLight, setIsLight, textColor, bgColor, hrColor} = useContext(DisplayContext)
    const changeIsLight = () => {
        setIsLight(!isLight)
    }

    const openResume = () => {
        window.open(PDF)
    }

    return (
        <>
        <div ref={mainRef} className="main" style={{backgroundColor: bgColor}}>
            <NavBar infoRef={infoRef} projectsRef={projectsRef} changeIsLight={changeIsLight} changeAbout={changeAbout} changeWork={changeWork}/>
    
            <div className="main-flex" style={{color: textColor}}>
                <div className='introduction'>
                    <hr className='horizontal-line' style={{border: hrColor}}/>
                    <h3>Hey, I'm</h3>
                    <h1>Sebastian Garcia</h1>
                    <h4>📍 Atlanta, GA 📍</h4>
                    <h4>Recent college graduate of the University of Georgia looking to start my career in web development. Most proficient in React but love learning new coding languages.</h4>
                    <button className='resume-button' onClick={openResume}> Resume </button>
                </div>

                <div className='vert-flex' style={{color: textColor}}>
                    <img src={profile} alt="Headshot" className="headshot"/>
                    <div className='socials'>
                        <hr className='social-hr' style={{border: hrColor}}/>
                        <h2>Contact Me or View My Work</h2>
                        <div className='socials-flex'>
                            <p>budder427@gmail.com</p>
                            
                            <a href="https://www.linkedin.com/in/sebastian-garcia-0783102a4/" target='_blank' rel='noopener noreferrer'>
                                <img className="social-img" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIN"/>
                            </a>
                            <a href="https://github.com/GitSeaBass" target='_blank' rel='noopener noreferrer'>
                                <img className="social-img" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {isLight?
        <>
            <img className="sun" src={sun} alt="sun"/>
            <img className='moon-down' src={moon} alt="moon" />
        </>
        :
        <>
            <img className="sun-down" src={sun} alt="sun"/>
            <img className='moon' src={moon} alt="moon" />
        </>
        }
        </>
    )
}

export default Main;