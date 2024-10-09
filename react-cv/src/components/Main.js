import './Main.css'
import NavBar from "./NavBar";

function Main({aboutRef, projectsRef, workRef}) {
    return (
        <div className="main">
            <NavBar aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
        </div>
    )
}

export default Main;