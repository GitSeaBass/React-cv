import './Main.css'
import NavBar from "./NavBar";

function Main({mainRef, aboutRef, projectsRef, workRef}) {
    return (
        <div ref={mainRef} className="main">
            <NavBar aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
    
            <h3>Hey, I'm</h3>
            <h1>Sebastian Garcia</h1>
            <h4>I'm a recent graduate looking to start my career in web development.</h4>

        </div>
    )
}

export default Main;