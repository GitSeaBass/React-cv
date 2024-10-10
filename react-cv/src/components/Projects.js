import './Projects.css'
import ProjectBox from './ProjectBox';

function Projects({projectsRef}) {    
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
            link: "",
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
            link: "",
            des: "Worked within a group of 3 to create an image gallery where users can upload photos and view other users photos. React was used for the frontend while Node and MongoDB were used for the backend and database."
        },
        {
            title: "Pokemon Team Genetic Algorithm",
            codes: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg'
            ],
            link: "",
            des: "Used multiple genetic algorithms to find the best Pokemon team to face a series of trainers along with writing a research paper outlining the process, design elements, and results of the genetic algorithm."
        }

    ]
    
    
    return (
        <div ref={projectsRef} className="projects-main">
            <h1>My Projects</h1>

            <div className='projects-container'>
                <div className='project-row'>
                    <ProjectBox title={myProjects[0].title} des={myProjects[0].des} link={myProjects[0].link} codes={myProjects[0].codes} />
                    <div className='fill-div'></div>
                </div>
                <div className='project-row'>
                    <div className='fill-div'></div>
                    <ProjectBox title={myProjects[1].title} des={myProjects[1].des} link={myProjects[1].link} codes={myProjects[1].codes}/>
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