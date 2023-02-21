import React from 'react'
import {japanese5 } from '../../images'

const JapaneseRender = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Water reflection render</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={japanese5} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Slight attempt</span> on some aesthetic renders. The idea was to also keep the stars moving to eventually create a spinning lights effect.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={japanese5} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 1</p>
        </div>

      </div>



      
      
    </>
  )
}

export default JapaneseRender