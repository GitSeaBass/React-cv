import './Projects.css'
import { useState } from 'react';

function Projects({projectsRef}) {
    const [projectNum, setProjectNum] = useState(0)
    
    const leftArrow = () => {
        setProjectNum(projectNum - 1)
    }

    const rightArrow = () => {
        setProjectNum(projectNum + 1)
    }

    
    const myProjects = [
        {
            title: "Cinema E-Booking System",
            codes: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5ryTY9VShCV5uJWhoBXkcxxlFB8O5bbxGA&s',
                'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png',
                'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
                'https://www.svgrepo.com/show/303251/mysql-logo.svg'

            ],
            links: [

            ],
            des: "Worked within a 5 person group to create a full-stack cinema e-booking system. This application uses React for the frontend while using SpringBoot for the backend along with a MySQL database that stores movies and users. I primarily worked on the frontend, but assisted elsewhere when needed. We worked through deliverables by delegating work between ourselves and communicating the progress of our work."
        },
        {
            title: "Image Gallery",
            codes: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5ryTY9VShCV5uJWhoBXkcxxlFB8O5bbxGA&s',
                'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s',
            ],
            links: [
                
            ],
            des: "Worked within a group of 3 to create an image gallery where users can upload photos and view other users photos. React was used for the frontend while Node and MongoDB were used for the backend and database."
        },
        {
            title: "Pokemon Team Genetic Algorithm",
            codes: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg'
            ],
            links: [
                
            ],
            des: "Used multiple genetic algorithms to find the best Pokemon team to face a series of trainers along with writing a research paper outlining the process, design elements, and results of the genetic algorithm."
        }

    ]
    
    
    return (
        <div ref={projectsRef} className="projects-main">
            <h1>My Projects</h1>

                <div className='project-container'>
                    <div className='project-left'>
                        <h2>{myProjects[projectNum].title}</h2> 
                        <div className='codes-container'>
                            {myProjects[projectNum].codes.map((code) =>
                                <img className='project-img-code' src={code} alt='Used Coding Language'/>
                            )}
                        </div>
                    </div>

                    <div className='project-right'>
                        <div>
                            <h4>Description</h4>
                            <p className='project-description'>{myProjects[projectNum].des}</p>
                        </div>
                        <div>
                            <h4>Links</h4>
                            {myProjects[projectNum].links.map((link) => 
                                <a href={link}>Link</a>                          
                            )}
                        </div>

                    </div>
                </div>

                {projectNum === 0?
                    <></>
                    :
                    <button className='arrow-container' onClick={leftArrow}>
                        <h3>{'<'}</h3>
                    </button>
                }

                {projectNum === myProjects.length - 1?
                    <></>
                    :
                    <button className='arrow-container' onClick={rightArrow}>
                        <h3>{'>'}</h3>
                    </button>
                }
        </div>
    )
}

export default Projects;