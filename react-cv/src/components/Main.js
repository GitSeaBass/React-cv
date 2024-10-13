import './Main.css'
import { useState } from 'react';
import profile from '../assets/Profile.jpeg'
import sun from "../assets/sun.png"
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
                    <h3>Hey, I'm</h3>
                    <h1>Sebastian Garcia</h1>
                    <h4>I'm a recent graduate looking to start my career in web development. Graduated from the University of Georgia and currently living near Atlanta, GA. I'm most proficient in React, but love learning new coding languages.</h4>
                </div>

                <img src={profile} alt="Headshot" className="headshot"/>
            </div>
        </div>

        {isDay?
        <>
            <img className="sun" src={sun} alt="sun"/>
        </>
        :
        <>
            <img className="sun-down" src={sun} alt="sun"/>
        </>
        }
        </>
    )
}

export default Main;