import React from 'react'

const Hulu = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Hulu v2</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-js, Tailwind</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://hulu-v2-two.vercel.app/'>https://hulu-v2-two.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/hulu-v2'>https://github.com/Havir-S/hulu-v2</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'hulu.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Using API</span> from TMDB and populating the grid with it.
      </p>



      
      
    </>
  )
}

export default Hulu