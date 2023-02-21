import React from 'react'
import { hayasaka, hayasaka2, hayasaka3 } from '../../images'

const Hayasaka = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Hayasaka</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={hayasaka} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>A very quick</span> 2h character creation speedrun, which unfortunately got corrupted after malware got into my PC. Screenshots are the only thing that remain now.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={hayasaka} alt='' />
          <p className='projectShow__picturesGrid_p'>Face</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={hayasaka2} alt='' />
          <p className='projectShow__picturesGrid_p'>Comparison 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={hayasaka3} alt='' />
          <p className='projectShow__picturesGrid_p'>Comparison 2</p>
        </div>
      </div>
    </>
  )
}

export default Hayasaka