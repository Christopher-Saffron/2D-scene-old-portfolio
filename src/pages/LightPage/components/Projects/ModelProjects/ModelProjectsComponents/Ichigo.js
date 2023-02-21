import React from 'react'
import {ichigo, ichigo2,ichigo3,ichigo4,ichigo5,ichigo6, } from '../../images'

const Ichigo = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Ichigo</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/ichigo-darling-in-the-franxx-a3a1c100c45644b08ac57bf4a1bec8a5'>https://sketchfab.com/3d-models/ichigo-darling-in-the-franxx-a3a1c100c45644b08ac57bf4a1bec8a5</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={ichigo} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>One friend</span> took it as a challenge to create the main character of the show, whilst I have picked a somewhat 'controversial' and hated one, just because I knew there's going to be way less competition in this field.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ichigo} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ichigo2} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ichigo3} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 2 + lineart</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ichigo4} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 4</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ichigo5} alt='' />
          <p className='projectShow__picturesGrid_p'>Full body</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={ichigo6} alt='' />
          <p className='projectShow__picturesGrid_p'>Full body</p>
        </div>



      </div>



      
      
    </>
  )
}

export default Ichigo