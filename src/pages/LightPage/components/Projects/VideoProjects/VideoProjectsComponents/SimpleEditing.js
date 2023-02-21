import React from 'react'
import { studniowka3, studniowka4} from '../../images'

const SimpleEditing = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Simple websites</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Sony Vegas Pro 13/17, DaVinci Resolve</p>
          
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={studniowka3} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Simple video editing</span> - cutting, slight color and lightning readjustments, little sound changes, all basic things.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={studniowka3} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={studniowka4} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 2</p>
        </div>

      </div>
      
    </>
  )
}

export default SimpleEditing