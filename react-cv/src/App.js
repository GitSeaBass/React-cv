import './App.css';
import { useRef } from 'react'
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {
 
  const mainRef = useRef(null)
  const aboutRef = useRef(null);
  const projectsRef = useRef(null)
  const workRef = useRef(null)

  const scrollTop = () => {
    mainRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="App">
        <button className='top-button' onClick={scrollTop}>^</button>
        <Main mainRef={mainRef} aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
        <About aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
        <Work workRef={workRef}/>
    </div>
  );
}

export default App;
