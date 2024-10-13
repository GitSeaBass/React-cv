import './Main.css'
import { useState } from 'react';
import profile from '../assets/Profile.jpeg'
import sun from "../assets/sun.png"
import moon from "../assets/Moon.png"
import NavBar from "./NavBar";

function Main({mainRef, aboutRef, projectsRef, workRef}) {
    const [isDay, setIsDay] = useState(true)
    const changeIsDay = () => {
        setIsDay(!isDay)
    }

    return (
        <>
        <div className='background'></div>
        <div ref={mainRef} className="main">
            <NavBar aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef} changeIsDay={changeIsDay}/>
    
            <div className="main-flex">
                <div className='introduction'>
                    <hr className='horizontal-line'/>
                    <h3>Hey, I'm</h3>
                    <h1>Sebastian Garcia</h1>
                    <h4>I'm a recent graduate looking to start my career in web development. Graduated from the University of Georgia and currently living near Atlanta, GA. I'm most proficient in React, but love learning new coding languages.</h4>
                </div>

                <div className='vert-flex'>
                    <img src={profile} alt="Headshot" className="headshot"/>
                    <div className='socials'>
                        <hr className='social-hr'/>
                        <h2>Contact Me and View My Work</h2>
                        <div className='socials-flex'>
                            <p>budder427@gmail.com</p>
                            <p>404-488-8236</p>
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

        {isDay?
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