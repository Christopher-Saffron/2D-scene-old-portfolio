import React from 'react'
import { sculpting, sculpting2  } from '../../images'

const BodySculpting = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> All body sculpting images</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={sculpting} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>I will try </span> to gather all images of body sculpting made by me here.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={sculpting} alt='' />
          <p className='projectShow__picturesGrid_p'>Body which later was used for the Mirio character.</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={sculpting2} alt='' />
          <p className='projectShow__picturesGrid_p'>Body which later was used for the Ichigo character.</p>
        </div>

        
      </div>
    </>
  )
}

export default BodySculpting