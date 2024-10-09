import './Main.css'
import NavBar from "./NavBar";

function Main({mainRef, aboutRef, projectsRef, workRef}) {
    return (
        <div ref={mainRef} className="main">
            <NavBar aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
        </div>
    )
}

export default Main;