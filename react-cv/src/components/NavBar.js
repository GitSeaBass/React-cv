import './NavBar.css'
import { useContext } from 'react'
import DisplayContext from '../context/DisplayContext'

function NavBar({infoRef, projectsRef, changeIsLight, changeAbout, changeWork}) {
    const {backColor, changeBackColor, textColor, changeTextColor, changeBGColor} = useContext(DisplayContext)


    const scrollProjects = () => {
        projectsRef.current.scrollIntoView({behavior: "smooth"})
    }

    const scrollAbout = () => {
        changeAbout()
        infoRef.current.scrollIntoView({behavior: "smooth"})
    }

    const scrollWork = () => {
        changeWork()
        infoRef.current.scrollIntoView({behavior: "smooth"})
    }

    const changeLight = () => {
        changeIsLight()
        changeBackColor()
        changeTextColor()
        changeBGColor()
    }

    return (
        <div className="bar" style={{backgroundColor: backColor}}>
            <div>
                <button onClick={changeLight} className="nav" style={{color: textColor}}>
                    Day/Night
                </button>
            </div>

            <div className='button-container'>
                <button className="nav" onClick={scrollAbout} style={{color: textColor}}>About</button>
                <button className="nav" onClick={scrollProjects} style={{color: textColor}}>Projects</button>
                <button className="nav" onClick={scrollWork} style={{color: textColor}}>Work</button>
            </div>
        </div>
    )
}

export default NavBar;