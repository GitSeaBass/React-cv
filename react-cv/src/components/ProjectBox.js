import './ProjectBox.css'

function ProjectBox() {
    return (
        <div className='project'>
            <div className='project-header'>
                <h4 className='project-title'>Cinema E-Booking System</h4>
                <div className='project-link'>Link</div>
            </div>
            <ul className='project-description'>
                <li>I did things</li>
                <li>some other things</li>
                <li>You wont believe it</li>
            </ul>
            <div className='project-languages'>
                <div>Lang</div>
                <div>Lang</div>
                <div>Lang</div>
            </div>
        </div>
    )
}

export default ProjectBox;