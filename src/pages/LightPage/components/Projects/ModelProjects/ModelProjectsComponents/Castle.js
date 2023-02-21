import React from 'react'
import {castle1, castle2, castle3 } from '../../images'

const Castle = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Land Sculpture</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={castle1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Old</span> attempt on somewhat realistic water and land.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={castle1} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={castle2} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={castle3} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 3</p>
        </div>

      </div>



      
      
    </>
  )
}

export default Castle