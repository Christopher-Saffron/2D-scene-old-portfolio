import React from 'react'

const Battleships = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Battleships</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Vanilla, Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://havir-s.github.io/battleships-deployed/'>https://havir-s.github.io/battleships-deployed/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/battleships-deployed'>https://github.com/Havir-S/battleships-deployed</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'battleships.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Old project</span> for either FreeCodeCamp or Project Odin.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={'battleships1.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>3D Character Face - Ally</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={'battleships2.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>3D Character Face - Enemy</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={'battleships3.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>3D Character Face - Enemy</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={'battleships4.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>Textures</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={'battleships5.png'} alt='' />
          <p className='projectShow__picturesGrid_p'>3D Character - Body</p>
        </div>
        
      </div>

      
      
    </>
  )
}

export default Battleships