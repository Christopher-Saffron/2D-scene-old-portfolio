import React from 'react'
import { loop1, cube, fluid, hole, scifi, sun, tori1, tori2, triangle, vicecity, water } from '../../images'

const LoopedVideos = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Looped videos</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Sony Vegas Pro 13/17, DaVinci Resolve</p>
          
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={loop1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Videos</span> that are perfect for a desktop background / website background.
      </p>

      <div className='projectShow__videoPlayer_gridBox' >
        <video className='projectShow__videoPlayer' src={scifi} loop muted controls />
        <video className='projectShow__videoPlayer' src={triangle} loop muted controls />
        <video className='projectShow__videoPlayer' src={vicecity} loop muted controls />
        <video className='projectShow__videoPlayer' src={sun} loop muted controls />
        <video className='projectShow__videoPlayer' src={water} loop muted controls />
        <video className='projectShow__videoPlayer' src={cube} loop muted controls />
        <video className='projectShow__videoPlayer' src={fluid} loop muted controls />
        <video className='projectShow__videoPlayer' src={hole} loop muted controls />
        <video className='projectShow__videoPlayer' src={tori2} loop muted controls />
        <video className='projectShow__videoPlayer' src={tori1} loop muted controls />
      </div>
      

      
      
    </>
  )
}

export default LoopedVideos