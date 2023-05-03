import React from 'react'

const Restaurant = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Restaurant</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Vanilla, Blender, css animations</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://havir-s.github.io/restaurant-page-react/'>https://havir-s.github.io/restaurant-page-react/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/restaurant-page-react'>https://github.com/Havir-S/restaurant-page-react</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'restaurant.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Old project</span> for either FreeCodeCamp or Project Odin.
      </p>

      {/* <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={'portfolioheavy2.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>First frame</p>
        </div>
        
      </div> */}

      
      
    </>
  )
}

export default Restaurant