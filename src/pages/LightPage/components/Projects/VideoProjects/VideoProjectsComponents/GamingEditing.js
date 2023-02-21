import React from 'react'
import { gaming1, gaming2, gaming3} from '../../images'

const GamingEditing = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Gaming video editing</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Sony Vegas Pro 13/17, DaVinci Resolve</p>
          
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={gaming1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Gaming video editing</span> - cutting, slight color and lightning readjustments, little sound changes, all basic things, subtitles and little 'funny' remarks. From the very first video I've been trying to replicate a Youtuber's &#40;SovietWomble&#41; editing style and his dynamic subtitles.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={gaming1} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={gaming2} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={gaming3} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 3</p>
        </div>

      </div>
      
    </>
  )
}

export default GamingEditing