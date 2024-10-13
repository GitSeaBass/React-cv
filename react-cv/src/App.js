import './App.css';
import { useRef, useState } from 'react'
import DisplayContext from './context/DisplayContext';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {
  const [isLight, setIsLight] = useState(true)


  const mainRef = useRef(null)
  const aboutRef = useRef(null);
  const projectsRef = useRef(null)
  const workRef = useRef(null)

  const scrollTop = () => {
    mainRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <DisplayContext.Provider value={{isLight, setIsLight}}>
      <div className="App">
          <button className='top-button' onClick={scrollTop}>^</button>
          <Main mainRef={mainRef} aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
          <About aboutRef={aboutRef}/>
          <Projects projectsRef={projectsRef}/>
          <Work workRef={workRef}/>
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
