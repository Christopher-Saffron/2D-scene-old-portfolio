import React from 'react'
import { tiktok1, tiktok2, tiktok3, tiktok4, tiktok5, tiktok6 } from '../../images'

const TiktokVideos = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Videos for tiktok</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Sony Vegas Pro 13/17, DaVinci Resolve</p>
          
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={tiktok3} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Fast paced videos</span> to keep the client's attention on the 'product'.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={tiktok3} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={tiktok1} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={tiktok2} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 3</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={tiktok4} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 4</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={tiktok5} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 5</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={tiktok6} alt='' />
          <p className='projectShow__picturesGrid_p'>Img 6</p>
        </div>
      </div>

      

      
      
    </>
  )
}

export default TiktokVideos