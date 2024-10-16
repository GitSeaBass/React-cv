import './Work.css'

function Work({workRef}) {
    return (
        <div ref={workRef} className='work-main'>
            <h1>My Work Experience</h1>

            <div className='jobs-container'>
                <div className='job'>
                    <div className='job-header'>
                        <div>
                            <h3 className='header-remove-margin'>Altitude</h3>
                            <h5 className='header-remove-margin'>Court Monitor</h5>
                            <h5 className='header-remove-margin'>June 2021 - July 2021</h5>
                        </div>
                        <img className='job-img' src='https://a.storyblok.com/f/201186/1200x680/6cb4c20358/opengraph-default-image.png' alt='Altitude'/>
                    </div>
                    
                    <ul>
                        <li>Ensured customers followed the rules while jumping on trampolines to ensure their safety</li>
                        <li>Worked with customers to resolve issues</li>
                        <li>Communicated with team members to relay questions and emergencies as well as to coordinate with each other</li>
                    </ul>
                    
                </div>

                <div className='job'>
                    <div className='job-header'>
                        <div>
                            <h3 className='header-remove-margin'> YMCA</h3>
                            <h5 className='header-remove-margin'>Assistant Camp Counselor</h5>
                            <h5 className='header-remove-margin'>June 2019 - July 2019</h5>
                        </div>
                        <img className='job-img' src='https://logos-world.net/wp-content/uploads/2021/11/YMCA-Logo.png' alt='YMCA'/>
                    </div>
                        
                    <ul>
                        <li>Supervised a group of 20 children, ages 5 - 14</li>
                        <li>Provided the children with the ability to participate in camp activities while ensuring their safety and resolving conflicts</li>
                        <li>Organized and supervised children during activities including rock climbing, swimming, and archery</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work;