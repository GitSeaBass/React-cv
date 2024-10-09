import './Main.css'
import NavBar from "./NavBar";

function Main({aboutRef}) {
    return (
        <div className="main">
            <NavBar aboutRef={aboutRef}/>
        </div>
    )
}

export default Main;