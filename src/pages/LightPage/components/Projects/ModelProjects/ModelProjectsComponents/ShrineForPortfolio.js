import React from 'react'
import {shrine1, shrine2, shrine3, shrine4, shrine5, shrine6 } from '../../images'

const ShrineForPortfolio = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Shrine for portfolio</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.havir.pl</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={shrine1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>3D Model</span> prepared strictly for the ThreeJS needs.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shrine1} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shrine2} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shrine3} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 3</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shrine4} alt='' />
          <p className='projectShow__picturesGrid_p'>Foxes</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shrine5} alt='' />
          <p className='projectShow__picturesGrid_p'>Masks</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={shrine6} alt='' />
          <p className='projectShow__picturesGrid_p'>Origami - 3d models</p>
        </div>
      </div>



      
      
    </>
  )
}

export default ShrineForPortfolio