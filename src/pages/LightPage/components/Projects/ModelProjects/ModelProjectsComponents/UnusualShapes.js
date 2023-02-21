import React from 'react'
import { shoe1, shoe2, trash1, trash2 } from '../../images'

const UnusualShapes = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Unusual shapes practice</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/shoe-practise-retopology-8cce68a8325143fd8361d8c7900f8171'>https://sketchfab.com/3d-models/shoe-practise-retopology-8cce68a8325143fd8361d8c7900f8171</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={shoe1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>I will try </span> to gather all unusual objects made by me here.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shoe1} alt='' />
          <p className='projectShow__picturesGrid_p'>Shoes 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shoe2} alt='' />
          <p className='projectShow__picturesGrid_p'>Shoes 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={trash1} alt='' />
          <p className='projectShow__picturesGrid_p'>Trash-chan, a UNITY/VRCHAT project, it was an interactive prop.</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={trash2} alt='' />
          <p className='projectShow__picturesGrid_p'>Trash-chan v2, a UNITY/VRCHAT project, it was an interactive prop.</p>
        </div>

        
      </div>
    </>
  )
}

export default UnusualShapes