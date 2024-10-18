import './Projects.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import ProjectBox from './ProjectBox';

function Projects({projectsRef}) {    
    const githubIcon = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"

    const myProjects = [
        {
            title: "Cinema E-Booking System",
            codes: [
                'React',
                'Javascript',
                'CSS',
                'Springboot',
                'Java',
                'MySQL'
            ],
            link: "https://github.com/GitSeaBass/CinemaEBooking",
            des: "Worked within a 5 person group to create a full-stack cinema e-booking system. This application uses React for the frontend while using SpringBoot for the backend along with a MySQL database that stores movies and users. I primarily worked on the frontend, but assisted elsewhere when needed. We worked through deliverables by delegating work between ourselves and communicating the progress of our work."
        },
        {
            title: "Image Gallery",
            codes: [
                'React',
                'Javascript',
                'CSS',
                'MongoDB',
                'Node',
            ],
            link: "https://github.com/pinkertonne/webdevproj",
            des: "Worked within a group of 3 to create an image gallery where users can upload photos and view other users photos. React was used for the frontend while Node and MongoDB were used for the backend and database."
        },
        {
            title: "Pokemon Team Genetic Algorithm",
            codes: [
                'Python',
                'LATEX'
            ],
            link: "",
            des: "Used multiple genetic algorithms to find the best Pokemon team to face a series of trainers along with writing a research paper outlining the process, design elements, and results of the genetic algorithm."
        }

    ]
    
    const {textColor, bgColor} = useContext(DisplayContext)

    return (
        <div ref={projectsRef} className="projects-main" style={{backgroundColor: bgColor}}>
            <h1 className='projects-header' style={{color: textColor}}>My Projects</h1>

            <div className='projects-container'>
                <div className='project-row'>
                    <ProjectBox title={myProjects[0].title} des={myProjects[0].des} link={myProjects[0].link} codes={myProjects[0].codes} linkImg={githubIcon}/>
                    <div className='fill-div'></div>
                </div>
                <div className='project-row'>
                    <div className='fill-div'></div>
                    <ProjectBox title={myProjects[1].title} des={myProjects[1].des} link={myProjects[1].link} codes={myProjects[1].codes} linkImg={githubIcon}/>
                </div>
                <div className='project-row'>
                    <ProjectBox title={myProjects[2].title} des={myProjects[2].des} link={myProjects[2].link} codes={myProjects[2].codes}/>
                    <div className='fill-div'></div>
                </div>
            </div>
        </div>
    )
}

export default Projects;