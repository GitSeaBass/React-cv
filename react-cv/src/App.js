import './App.css';
import { useRef, useState } from 'react'
import DisplayContext from './context/DisplayContext';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import InfoDisplay from './components/InfoDisplay';
import Work from './components/Work';

function App() {
  const [isLight, setIsLight] = useState(true)
  const [backColor, setBackColor] = useState('cornflowerblue')
  const changeBackColor = () => {
    if (backColor === 'cornflowerblue') {
      setBackColor('darkblue')
    } else {
      setBackColor('cornflowerblue')
    }
  }

  const [textColor, setTextColor] = useState('black')
  const changeTextColor = () => {
    if (textColor === 'black') {
      setTextColor('white')
    } else {
      setTextColor('black')
    }
  }

  const mainRef = useRef(null)
  const aboutRef = useRef(null);
  const projectsRef = useRef(null)
  const workRef = useRef(null)

  const scrollTop = () => {
    mainRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <DisplayContext.Provider value={{isLight, setIsLight, backColor, changeBackColor, textColor, changeTextColor}}>
      <div className="App">
          <button className='top-button' onClick={scrollTop}>^</button>
          <Main mainRef={mainRef} aboutRef={aboutRef} projectsRef={projectsRef} workRef={workRef}/>
          <InfoDisplay aboutRef={aboutRef} workRef={workRef}/>
          {/*<About aboutRef={aboutRef}/>*/}
          <Projects projectsRef={projectsRef}/>
          {/*<Work workRef={workRef}/>*/}
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
