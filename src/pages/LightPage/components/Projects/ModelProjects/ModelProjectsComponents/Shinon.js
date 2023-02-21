import React from 'react'
import { sinon  } from '../../images'

const Shinon = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Shinon</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/sinon-daniel-kreuter-tutorial-my-attempt-192dbffcd530434fa72854b80952adeb'>https://sketchfab.com/3d-models/sinon-daniel-kreuter-tutorial-my-attempt-192dbffcd530434fa72854b80952adeb</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={sinon} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>This</span> just happens to be a character that I've created by following a 30 part tutorial on Youtube. It was one of the first things I've created.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={sinon} alt='' />
          <p className='projectShow__picturesGrid_p'>Face</p>
        </div>
      </div>
    </>
  )
}

export default Shinon