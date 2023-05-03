import React from 'react'

const SimpleServer = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> File archive</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-JS, Tailwind, Mongoose</p>
          {/* <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://mementomori-mocha.vercel.app/'>https://mementomori-mocha.vercel.app/</a></p> */}
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/szafranprojekt-nextjs-project-browser'>https://github.com/Havir-S/szafranprojekt-nextjs-project-browser</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'simpleserver.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Allows</span> all PCs connected to the local network to store data on the host.
      </p>



      
      
    </>
  )
}

export default SimpleServer