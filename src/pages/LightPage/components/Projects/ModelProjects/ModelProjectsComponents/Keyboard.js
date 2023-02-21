import React from 'react'
import { keyboard1, keyboard2 } from '../../images'

const Keyboard = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Keyboard, mouse and mouse bungee</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/keyboard-mouse-and-mouse-bungee-b70875cba67e45748c35d4176a389338'>https://sketchfab.com/3d-models/keyboard-mouse-and-mouse-bungee-b70875cba67e45748c35d4176a389338</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={keyboard1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>My old</span> keyboard, mouse and mouse bungee remain the same.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={keyboard1} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 1</p>
        </div>


      </div>



      
      
    </>
  )
}

export default Keyboard