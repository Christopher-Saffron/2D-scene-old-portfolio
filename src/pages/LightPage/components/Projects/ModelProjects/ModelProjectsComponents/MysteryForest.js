import React from 'react'
import {forest1, forest2, forest3, forest4, forest5, forest6, forest7, forest8, forest9, forest10, forest11, } from '../../images'

const MysteryForest = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Mystery Forest</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.havir.pl</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={forest10} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Made for</span> portfolio purposes.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest1} alt='' />
          <p className='projectShow__picturesGrid_p'>How it looks in  blender</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest2} alt='' />
          <p className='projectShow__picturesGrid_p'>The 'frame' following the camera 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest3} alt='' />
          <p className='projectShow__picturesGrid_p'>The 'frame' following the camera 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest4} alt='' />
          <p className='projectShow__picturesGrid_p'>Adjusting render settings</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest5} alt='' />
          <p className='projectShow__picturesGrid_p'>Before playing with lightning</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest6} alt='' />
          <p className='projectShow__picturesGrid_p'>Adding Tori gates to the scene</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest7} alt='' />
          <p className='projectShow__picturesGrid_p'>Different colors</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest8} alt='' />
          <p className='projectShow__picturesGrid_p'>Adding more props</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest9} alt='' />
          <p className='projectShow__picturesGrid_p'>No props</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={forest10} alt='' />
          <p className='projectShow__picturesGrid_p'>Tori instead of the rectangle</p>
        </div>
 

      </div>



      
      
    </>
  )
}

export default MysteryForest