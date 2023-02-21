import React from 'react'
import {rimuru1, rimuru3, rimuru4, rimuru5, rimuru6, } from '../../images'

const Rimuru = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Ichigo</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Blender, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span><a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://sketchfab.com/3d-models/rimuru-tempest-reincarnated-as-a-slime-7f93f1ad0f0f40c29e4224765f5cd9b8'>https://sketchfab.com/3d-models/rimuru-tempest-reincarnated-as-a-slime-7f93f1ad0f0f40c29e4224765f5cd9b8</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={rimuru3} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Character</span> from a show that I just like - nothing else, really.
      </p>

      <div className='projectShow__picturesGrid'> 
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={rimuru3} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={rimuru4} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 2</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={rimuru5} alt='' />
          <p className='projectShow__picturesGrid_p'>Perspective 3</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={rimuru6} alt='' />
          <p className='projectShow__picturesGrid_p'>Full body 1</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}} src={rimuru1} alt='' />
          <p className='projectShow__picturesGrid_p'>Full body 2</p>
        </div>



      </div>



      
      
    </>
  )
}

export default Rimuru