import './NavBar.css'

function NavBar({aboutRef, projectsRef, workRef}) {
    const scrollAbout = () => {
        aboutRef.current.scrollIntoView({behavior: "smooth"})
    }

    const scrollProjects = () => {
        projectsRef.current.scrollIntoView({behavior: "smooth"})
    }

    const scrollWork = () => {
        workRef.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className="bar">
            <button className="nav" onClick={scrollAbout}>About</button>
            <button className="nav" onClick={scrollProjects}>Projects</button>
            <button className="nav" onClick={scrollWork}>Work</button>
        </div>
    )
}

export default NavBar;