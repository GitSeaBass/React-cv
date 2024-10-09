import './NavBar.css'

function NavBar({aboutRef}) {
    const scrollAbout = e => {
        aboutRef.current.scrollIntoView({behavior: "smooth"})
    }


    return (
        <div className="bar">
            <button className="nav" onClick={scrollAbout}>About</button>
            <button className="nav">Projects</button>
            <button className="nav">Work</button>
        </div>
    )
}

export default NavBar;