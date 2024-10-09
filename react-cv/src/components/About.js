import './About.css'
import LangContainer from './LangContainer';

function About() {
    return (
        <div className="about-main">
            <img src="" alt="Headshot"/>
            <p className="intro">Recent Computer Science graduate seeking a Front-End Web Developer position. Avid learner with a strong aptitude for new technologies and a passion to tackle web development challenges.</p>
            
            <hr />
            
            <div className="experience-div">
                <h3>Experience With</h3>
                <div className="coding-lang-flex">
                    <LangContainer des="React"/>
                    <LangContainer des="Javascript"/>
                    <LangContainer des="CSS/HTML"/>
                    <LangContainer des="Python"/>
                    <LangContainer des="Java"/>
                    <LangContainer des="C++"/>
                    <LangContainer des="C"/>
                </div>
            </div>

            <hr />

            <div className="soft-skills-container">
                <h3>Other Skills</h3>

            </div>
        </div>
    )
}

export default About;