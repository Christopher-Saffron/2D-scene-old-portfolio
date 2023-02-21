import React from 'react'

import './styles.scss'

const VideoPlayer = ({vid}) => {
  return (
    <div className='mainVideo-holder'>
        {/* <video preload='auto' className='mainVideo' autoPlay loop onLoadedData={onLoadedData} muted  style={{ transition: 'opacity 400ms ease 0ms', opacity: isVideoLoaded ? 1 : 0 }}  >
          <source src={BESTNOFRAME} type="video/mp4"/> */}
        <video className='mainVideo' autoPlay  loop muted   >
            <source src={vid} type="video/mp4"/>
        </video>
    </div>
  )
}

export default VideoPlayer