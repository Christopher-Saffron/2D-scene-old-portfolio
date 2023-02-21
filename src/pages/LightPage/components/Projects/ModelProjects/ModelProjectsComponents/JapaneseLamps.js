import React from 'react'
import { japanese1, japanese2, japanese3, japanese4,  } from '../../images'

const JapaneseLamps = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Japanese Lamps</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={japanese1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Solid Shape </span> practice.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={japanese1} alt='' />
          <p className='projectShow__picturesGrid_p'>Lamp 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={japanese2} alt='' />
          <p className='projectShow__picturesGrid_p'>Lamp 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={japanese3} alt='' />
          <p className='projectShow__picturesGrid_p'>Lamp 3</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={japanese4} alt='' />
          <p className='projectShow__picturesGrid_p'>Lamp 4</p>
        </div>

        
      </div>
    </>
  )
}

export default JapaneseLamps