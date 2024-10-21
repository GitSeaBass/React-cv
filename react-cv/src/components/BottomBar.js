import './BottomBar.css'
import { useContext } from 'react';
import DisplayContext from '../context/DisplayContext';

function BottomBar() {
    const {backColor} = useContext(DisplayContext)

    return (
        <div className='bottom-bar' style={{background: backColor}}>
        </div>
    )
}

export default BottomBar;