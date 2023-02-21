import React from 'react'
import { website, servicesVideo } from '../../images'

const WebsiteVideos = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Videos for websites</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Sony Vegas Pro 13/17, DaVinci Resolve</p>
          
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={website} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Copyright free videos</span> edited for website usage.
      </p>

        <video className='projectShow__videoPlayer' style={{maxWidth: '600px'}} src={servicesVideo} loop muted controls />

      

      
      
    </>
  )
}

export default WebsiteVideos