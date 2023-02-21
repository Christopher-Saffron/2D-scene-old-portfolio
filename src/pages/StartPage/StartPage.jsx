import React, {useState} from 'react'
import Particle from './components/Particle.jsx'
import Ui from './components/UI.jsx'
import Footer from './components/Footer.jsx'
import TopUi from './components/TopUi.jsx'

import './styles.scss'


const StartComponent = ({webpageMode, handleClick}) => {

    //COLOR FOR THE PARTICLE SYSTEM
    const [color, setColor] = useState('#fff')

  return (
    <div className='StartComponent__holder'>
      <div className='App_particleDiv'>
        <Particle color={color} />
      </div>
      <Footer webpageMode={webpageMode} color={color} />
      <Ui color={color} setColor={setColor} handleClick={handleClick} />
      {/* <TopUi /> */}
      
    </div>
  )
}

export default StartComponent