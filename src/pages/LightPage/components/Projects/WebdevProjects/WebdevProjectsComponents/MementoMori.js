import React from 'react'

const MementoMori = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Memento Mori</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Tailwind</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://mementomori-mocha.vercel.app/'>https://mementomori-mocha.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/mementomori'>https://github.com/Havir-S/mementomori</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'mementomori.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Memento Mori</span> can be translated into "Remember that You will die". This website was meant to illustrate how little time we have left, and possibly motivate us to procrastinate less.
      </p>



      
      
    </>
  )
}

export default MementoMori