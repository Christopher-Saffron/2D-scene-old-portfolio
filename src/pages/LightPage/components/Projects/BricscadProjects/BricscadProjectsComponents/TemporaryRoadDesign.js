import React from 'react'
import { bricscad5, bricscad6,  } from '../../images'

const TemporaryRoadDesign = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Temporary Road design</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Bricscad, Paint.net, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={bricscad5} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Last step</span> where depending on the situation and information from police, client and literally the law, certain changes to the road are being designed. After that, the whole project must be processed by all governing offices, as well as the main police department.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad5} alt='' />
          <p className='projectShow__picturesGrid_p'>Project with new 'to be placed' road signs</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad6} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 2</p>
        </div>
      </div>
    </>
  )
}

export default TemporaryRoadDesign