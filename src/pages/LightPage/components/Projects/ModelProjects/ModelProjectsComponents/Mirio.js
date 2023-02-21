import React from 'react'
import { mirio3, mirio2, mirio1 } from '../../images'

const Mirio = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Mirio</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/mirio-togata-boku-no-hero-academia-f8b6ba235bc84a859e3e8d9e3ba8c576'>https://sketchfab.com/3d-models/mirio-togata-boku-no-hero-academia-f8b6ba235bc84a859e3e8d9e3ba8c576</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={mirio3} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Again</span> a character that has not yet been introduced in the series, so I tried my best to finish him before the debut.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={mirio3} alt='' />
          <p className='projectShow__picturesGrid_p'>Chest</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={mirio2} alt='' />
          <p className='projectShow__picturesGrid_p'>Face 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={mirio1} alt='' />
          <p className='projectShow__picturesGrid_p'>Face 2</p>
        </div>
      </div>
    </>
  )
}

export default Mirio