import React from 'react'
import { garfield1, garfield2, garfield3  } from '../../images'

const Garfield = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Garfield Project Props</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={garfield1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Unironically </span> this has been a collaboration with a friend of mine, who's gotten himself into map/level design for VRChat, and we both put effort into creating a horror map when "I'm sorry John memes" were on a rise.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={garfield1} alt='' />
          <p className='projectShow__picturesGrid_p'>Garfield mixed with a centipede</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={garfield2} alt='' />
          <p className='projectShow__picturesGrid_p'>Garfield mixed with a praying mantis</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={garfield3} alt='' />
          <p className='projectShow__picturesGrid_p'>Garfield mixed with a spider</p>
        </div>
        
      </div>
    </>
  )
}

export default Garfield