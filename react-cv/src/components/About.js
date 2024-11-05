import './About.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import LangContainer from './LangContainer';

function About() {
    const {hrColor} = useContext(DisplayContext)

    return (
        <div className="about-main">
            <p className="intro">
                I graduated from the University of Georgia with a degree in Computer Science with Honors. I first began learning web development in React, but have recently began learning Angular.
            </p>
            
            <hr className='top-hr' style={{border: hrColor}}/>
            
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

            <hr className='middle-hr' style={{border: hrColor}}/>

            <div className="learning-container">
                <h3 className='about-header'>Currently Learning</h3>
                <div className='coding-learn-flex'>
                    <LangContainer img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" des="Angular" />
                    <LangContainer img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" des="Typescript" />
                </div>
            </div>
        </div>
    )
}

export default About;