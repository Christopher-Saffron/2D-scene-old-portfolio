import React from 'react'
import {  bricscad4, bricscad9, bricscad10  } from '../../images'

const MapStocktaking = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Map Stocktaking</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Bricscad, Paint.net, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={bricscad4} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>This is the step </span> where all gathered intel from the traffic videos can be used in order to recrate the IRL state of traffic signs for future projects.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad4} alt='' />
          <p className='projectShow__picturesGrid_p'>Simple junction with 'LIVE' traffic signs</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad9} alt='' />
          <p className='projectShow__picturesGrid_p'>Recorded videos from the road</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad10} alt='' />
          <p className='projectShow__picturesGrid_p'>Video preview</p>
        </div>
      </div>
    </>
  )
}

export default MapStocktaking