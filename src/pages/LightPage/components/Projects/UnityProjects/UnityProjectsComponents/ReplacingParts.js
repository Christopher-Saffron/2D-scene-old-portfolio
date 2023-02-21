import React from 'react'
import { unity4, unity5, unity6, unity7, unity8, } from '../../images'

const ReplacingParts = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Replacing work-heavy parts such as hair and clothing</span></p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Unity, Blender, Gimp, VRCHAT SDK</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={unity4} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>VRCHAT</span> replacing parts of an avatar can be either a quick or extremely long process. All comes down to functionality. If a part is meant to just stay in place, it's simple. But if it's meant to react to one or more body parts, now that can be time-consuming.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity5} alt='' />
          <p className='projectShow__picturesGrid_p'>Original clothing</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity6} alt='' />
          <p className='projectShow__picturesGrid_p'>Replacement clothes 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity7} alt='' />
          <p className='projectShow__picturesGrid_p'>Replacement clothes 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity8} alt='' />
          <p className='projectShow__picturesGrid_p'>Replacement clothes 3</p>
        </div>

        
      </div>
    </>
  )
}

export default ReplacingParts