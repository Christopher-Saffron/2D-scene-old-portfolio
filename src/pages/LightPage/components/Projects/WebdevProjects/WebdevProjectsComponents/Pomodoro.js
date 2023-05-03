import React from 'react'

const Pomodoro = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Pomodoro website</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Vanilla, </p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://havir-s.github.io/pomodoro-havir/'>https://havir-s.github.io/pomodoro-havir/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/pomodoro-havir'>https://github.com/Havir-S/pomodoro-havir</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'pomodoro.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Old project</span> for either FreeCodeCamp or Project Odin.
      </p>
      
      
    </>
  )
}

export default Pomodoro