import React from 'react'
import {  unity15, unity16, } from '../../images'

const WorldCreation = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>World creation/upload</span></p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Unity, Blender, Gimp, VRCHAT SDK</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={unity15} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>VRCHAT</span> allows users to upload their own creations into the Metaverse. If it's a 3D Object, it will always be accepted.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity15} alt='' />
          <p className='projectShow__picturesGrid_p'>A cut of a minecraft world imported into vrchat.</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity16} alt='' />
          <p className='projectShow__picturesGrid_p'>Very old model of a city surrounded by walls by me, from a show - Attack on Titan .</p>
        </div>


        
      </div>
    </>
  )
}

export default WorldCreation