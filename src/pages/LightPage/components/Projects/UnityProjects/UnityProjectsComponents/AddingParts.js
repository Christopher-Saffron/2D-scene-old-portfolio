import React from 'react'
import {unity12, unity13, } from '../../images'

const AddingParts = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Adding new assets to the avatar</span></p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Unity, Blender, Gimp, VRCHAT SDK</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={unity12} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>It's possible</span> to spawn multiple objects, however all of them need proper handling. Making sure an object stays in one place and does not follow the avatar's coordinates requires a bit of code.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity12} alt='' />
          <p className='projectShow__picturesGrid_p'>Objects not following the avatar</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity13} alt='' />
          <p className='projectShow__picturesGrid_p'>Objects following the avatar</p>
        </div>

        
      </div>
    </>
  )
}

export default AddingParts