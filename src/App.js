import { useState } from 'react';
import './App.scss';
import StartPage from './pages/StartPage/StartPage';
import LightPage from './pages/LightPage/LightPage';

const WebpageMode = {
  START: 'start',
  LIGHT: 'light',
};

const App = () => {
  const [webpageMode, setWebpageMode] = useState(WebpageMode.START);

  const handleClick = (newWebpage) => {
    setTimeout(() => {
      setWebpageMode(newWebpage);
    }, 1000)
  };

  return (
    <>
      {webpageMode === WebpageMode.START ? (
        <StartPage handleClick={handleClick} webpageMode={webpageMode} />
      ) : webpageMode === WebpageMode.LIGHT ? (
        <LightPage />
      ) : (
        'Error Page'
      )}
    </>
  );
};

export default App;