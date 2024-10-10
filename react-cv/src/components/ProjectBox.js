import './ProjectBox.css'

function ProjectBox({ title, des, link, codes}) {
    return (
        <div className='project'>
            <div className='project-header'>
                <h4 className='project-title'>{title}</h4>
                <div className='project-link'>{link}</div>
            </div>
            <ul className='project-description'>
                <li>{des}</li>
            </ul>
            <div className='project-languages'>
                {codes.map((code) => 
                    <div>
                        <img className='project-code-img' src={code} alt="Lang"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectBox;