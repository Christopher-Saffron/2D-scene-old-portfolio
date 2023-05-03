import React from 'react'

const Instagram = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Instagram v2</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-js, Firebase, Recoil-JS, Tailwind, Google-auth, Next-auth, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://instagram-v2-phi.vercel.app/'>https://instagram-v2-phi.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/instagram-v2'>https://github.com/Havir-S/instagram-v2</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'insta.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Instagram</span> as a mean to practice Firebase and google-auth.
      </p>



      
      
    </>
  )
}

export default Instagram