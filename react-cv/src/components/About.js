import './About.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import LangContainer from './LangContainer';

function About() {
    const {hrColor} = useContext(DisplayContext)

    return (
        <div className="about-main">
            <p className="intro">Recent Computer Science graduate seeking a Front-End Web Developer position. Avid learner with a strong aptitude for new technologies and a passion to tackle web development challenges.</p>
            
            <hr style={{border: hrColor}}/>
            
            <div className="experience-div">
                <h3 className='about-header'>Experience With</h3>
                <div className="coding-lang-flex">
                    <LangContainer img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" des="React"/>
                    <LangContainer img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" des="Javascript"/>
                    <LangContainer img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5ryTY9VShCV5uJWhoBXkcxxlFB8O5bbxGA&s" des="CSS"/>
                    <LangContainer img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" des="HTML"/>
                    <LangContainer img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" des="Python"/>
                    <LangContainer img="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" des="Java"/>
                </div>
            </div>

            <hr style={{border: hrColor}}/>

            <div className="soft-skills-container">
                <h3 className='about-header'>Currently Learning</h3>

            </div>
        </div>
    )
}

export default About;