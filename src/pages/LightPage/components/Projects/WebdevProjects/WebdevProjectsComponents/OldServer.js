import React from 'react'

const OldServer = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> File archive - older version for Szafran Projekt</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-JS, MUI, Mongoose, Node</p>
          <p><span className='projectShow__secondColor'>Github client:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/szafranprojekt-dev-client-template'> https://github.com/Havir-S/szafranprojekt-dev-client-template</a></p>
          <p><span className='projectShow__secondColor'>Github server:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/szafranprojekt-dev-server'>https://github.com/Havir-S/szafranprojekt-dev-server</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'oldserver.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>More features</span> but again, it's the older version. - archived.
      </p>



      
      
    </>
  )
}

export default OldServer