import React from 'react'
import { unity10, unity11, unity14,   } from '../../images'

const CreatingToggles = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Creating toggles and emotes</span></p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Unity, Blender, Gimp, VRCHAT SDK</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={unity14} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Toggles</span> are the fundations of many avatar functionalities. As buggy as they are, they can create miracles.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity14} alt='' />
          <p className='projectShow__picturesGrid_p'>One of toggles to spawn a weapon, hat and glasses.</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity10} alt='' />
          <p className='projectShow__picturesGrid_p'>A toggle to use a shapekey from Blender which pulls up the scarf.</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={unity11} alt='' />
          <p className='projectShow__picturesGrid_p'>Shocked emote - applied through toggles or keybinds.</p>
        </div>
        


        
      </div>
    </>
  )
}

export default CreatingToggles