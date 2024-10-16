import './App.css';
import { useRef, useState } from 'react'
import DisplayContext from './context/DisplayContext';
import Main from './components/Main';
import Projects from './components/Projects';
import InfoDisplay from './components/InfoDisplay';

function App() {
  const [isLight, setIsLight] = useState(true)
  const [backColor, setBackColor] = useState('cornflowerblue')
  const changeBackColor = () => {
    if (backColor === 'cornflowerblue') {
      setBackColor('black')
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

  const [bgColor, setBGColor] = useState('white')
  const changeBGColor = () => {
    if (bgColor === 'white') {
      setBGColor('dimgray')
    } else {
      setBGColor('white')
    }
  }

  const [borderColor, setBorderColor] = useState('4px solid cornflowerblue')
  const changeBorderColor = () => {
    if (borderColor === '4px solid cornflowerblue') {
      setBorderColor('4px solid black')
    } else {
      setBorderColor('4px solid cornflowerblue')
    }
  }


  const mainRef = useRef(null)
  const projectsRef = useRef(null)
  const infoRef = useRef(null)

  const scrollTop = () => {
    mainRef.current.scrollIntoView({behavior: "smooth"})
  }

  const [display, setDisplay] = useState('about')
  const changeAbout = () => {
    setDisplay('about')
  }
  const changeWork = () => {
      setDisplay('work')
  }

  return (
    <DisplayContext.Provider value={{isLight, setIsLight, backColor, changeBackColor, textColor, changeTextColor, bgColor, changeBGColor, borderColor, changeBorderColor}}>
      <div className="App">
          <button className='top-button' onClick={scrollTop}>^</button>
          <Main mainRef={mainRef} infoRef={infoRef} projectsRef={projectsRef} changeAbout={changeAbout} changeWork={changeWork}/>
          <InfoDisplay infoRef={infoRef} display={display} changeAbout={changeAbout} changeWork={changeWork}/>
          <Projects projectsRef={projectsRef}/>
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
