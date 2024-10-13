import './Main.css'
import profile from '../assets/Profile.jpeg'
import NavBar from "./NavBar";

function Main({mainRef, aboutRef, projectsRef, workRef}) {
    return (
        <>
        <div className='background'></div>
        <div ref={mainRef} className="main">
            <NavBar aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
    
            <div className="main-flex">
                <div className='introduction'>
                    <h3>Hey, I'm</h3>
                    <h1>Sebastian Garcia</h1>
                    <h3>I'm a recent graduate looking to start my career in web development.</h3>
                </div>

                <img src={profile} alt="Headshot" className="headshot"/>
            </div>
        </div>
        </>
    )
}

export default Main;