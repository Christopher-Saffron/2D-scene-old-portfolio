import React from 'react'
import {ramiris, ramiris1, ramiris2, ramiris3, ramiris4, ramiris5, ramiris6, ramiris7, ramiris8, } from '../../images'

const Ramiris = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Ramiris</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/ramiris-reincarnated-as-a-slime-anime-f6bf07faa6fa47c18efbc025f6edf064'>https://sketchfab.com/3d-models/ramiris-reincarnated-as-a-slime-anime-f6bf07faa6fa47c18efbc025f6edf064</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={ramiris1} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Character</span> which I decided to recreate as a 3d character, before it officially got broadcasted. At that point, the only thing I got as a reference was the character sheet.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ramiris1} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ramiris2} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ramiris3} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 3</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ramiris6} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 4</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ramiris7} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 5</p>
        </div>


      </div>



      
      
    </>
  )
}

export default Ramiris