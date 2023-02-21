import React from 'react'
import { lightpage1, lightpage2, lightpage3, lightpage4, lightpage5, lightpage6, lightpage7, lightpage8,  } from '../../images'

const PortfolioLight = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Portfolio 2D Props</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={lightpage6} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>All props</span> used in creation of the Portfolio 2D Page.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage1} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage2} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage3} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 3</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage4} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 4</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage5} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 5</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage6} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 6</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage7} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 7</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={lightpage8} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 8</p>
        </div>

      </div>
    </>
  )
}

export default PortfolioLight