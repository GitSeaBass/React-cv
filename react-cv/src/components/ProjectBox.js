import './ProjectBox.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';

function ProjectBox({ title, des, link, codes, linkImg}) {
    const {boxBackgroundColor, textColor, borderColor, codeColor} = useContext(DisplayContext)

    return (
        <div className='project' style={{backgroundColor: boxBackgroundColor, color: textColor, border: borderColor}}>
            <div className='project-header'>
                <h4 className='project-title'>{title}</h4>
                <div className='project-link'>
                    {link !==""? 
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            <img className="project-code-img" src={linkImg} alt="GitHub Link"/>
                        </a>
                        :
                        <></>
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