import './ProjectBox.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import Paper from '../assets/Paper.pdf'

function ProjectBox({ title, des, link, codes, linkImg}) {
    const {boxBackgroundColor, textColor, borderColor, codeColor} = useContext(DisplayContext)

    const openPaper = () => {
        window.open(Paper)
    }

    return (
        <div className='project' style={{backgroundColor: boxBackgroundColor, color: textColor, border: borderColor}}>
            <div className='project-header'>
                <h4 className='project-title'>{title}</h4>
                <div className='project-link'>
                    {link !==""? 
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            <img className="project-code-img" src={linkImg} alt="Link"/>
                        </a>
                        :
                        <div className='paper-button' onClick={openPaper}>
                            <img className="project-code-img" src={linkImg} alt="Link"/>
                        </div>
                    }
                </div>
            </div>
            <ul className='project-description'>
                <li>{des}</li>
            </ul>
            <div className='project-languages'>
                {codes.map((code) => 
                    <div>
                        <p className='codename-display' style={{backgroundColor: codeColor}}>{code}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectBox;