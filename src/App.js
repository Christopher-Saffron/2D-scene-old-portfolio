import {useState, useEffect} from 'react';

import './App.scss'

import StartPage from './pages/StartPage/StartPage'
import LightPage from './pages/LightPage/LightPage';
import HeavyPage from './pages/HeavyPage/HeavyPage';


const App = () => {

  // Current state ['start', 'light', 'heavy', ]
  const [webpageMode, setWebpageMode] = useState('start');

  //WHEN DIFFERENT PAGE IS BEING SELECTED
  const handleClick = (newWebpage) => {
    ///TODO: THIS IS A TEMPORARY FIX, GOTTA MAKE IT LOOK MORE CLEAN
    // document.querySelector('.StartComponent__TopUi').classList.add('fadeOut');
    setTimeout(() => {
      setWebpageMode(newWebpage);
    }, 1000)
  }

  return (
    <>
      {webpageMode === 'start' ? <StartPage handleClick={handleClick} webpageMode={webpageMode} />
      : webpageMode === 'light' ? <LightPage />
      : webpageMode === 'heavy' ?  <HeavyPage />
      : 'Something went wrong'
      }
    </>
  )
  
}

export default App;
