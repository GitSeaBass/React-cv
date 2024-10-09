import './App.css';
import { useRef } from 'react'
import Main from './components/Main';
import About from './components/About';

function App() {
  const aboutRef = useRef(null);

  return (
    <div className="App">
        <Main aboutRef={aboutRef}/>
        <About aboutRef={aboutRef}/>
    </div>
  );
}

export default App;
