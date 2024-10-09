import './App.css';
import { useRef } from 'react'
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null)
  const workRef = useRef(null)

  return (
    <div className="App">
        <Main aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
        <About aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
        <Work workRef={workRef}/>
    </div>
  );
}

export default App;
