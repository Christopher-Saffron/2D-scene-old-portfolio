import React from 'react'
import { szafranprojekt6, szafranprojekt3, szafranprojekt2, szafranprojekt5, szafranprojekt7, szafranprojekt8, szafranprojektDevVIDEO, portfoliolight1, portfoliolight2, portfoliolight3 } from '../../images'

const Portfolio2D = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Portfolio 2D</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Blender, GIMP, Sass</p>
          <p><span className='projectShow__secondColor'>Websites in total:</span> 1</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.havir.pl</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href=''>www.github/havir/szaf.com</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={portfoliolight2} alt='' />
        </div>
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>This page</span> is supposed to be the LIGHTER version of the portfolio. Background images have been all prepared in Blender.
      </p>
      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfoliolight2} alt='' />
          <p className='projectShow__picturesGrid_p'>Starting look</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfoliolight1} alt='' />
          <p className='projectShow__picturesGrid_p'>How it looked in blender 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={portfoliolight3} alt='' />
          <p className='projectShow__picturesGrid_p'>How it looked in blender 2</p>
        </div>
      </div>
    </>
  )
}

export default Portfolio2D