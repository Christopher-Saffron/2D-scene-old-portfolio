import React from 'react'

const Facebook = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Facebook v2</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-js, Tailwind, Google-auth, Firebase</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://havir-facebook.vercel.app/'>https://havir-facebook.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/fb-clone'>https://github.com/Havir-S/fb-clone</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'facebook.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Testing</span> Google Auth + creating a feed for all users.
      </p>



      
      
    </>
  )
}

export default Facebook