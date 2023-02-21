import React from 'react'
import { bricscad3, bricscad7, bricscad8  } from '../../images'

const MapPreparation = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Map Preparation</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Bricscad, Paint.net, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={bricscad3} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Maps </span> can be bought or reused, but they must be up-to-date. Otherwise it's only going to complicate things and delay the whole project. Thus unless it hasn't been a week or two, it's best to create a new map, just to be sure.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad3} alt='' />
          <p className='projectShow__picturesGrid_p'>Singular map projection</p>
        </div>
        {/* <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad2} alt='' />
          <p className='projectShow__picturesGrid_p'>Bigger map preview</p>
        </div> */}
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad8} alt='' />
          <p className='projectShow__picturesGrid_p'>A couple projects worth of maps</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={bricscad7} alt='' />
          <p className='projectShow__picturesGrid_p'>Another batch of maps</p>
        </div>

        
      </div>
    </>
  )
}

export default MapPreparation