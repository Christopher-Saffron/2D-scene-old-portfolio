import React from 'react'
import './styles.scss'

const Navbar = ({currentState, changePhase}) => {
  return (
  
        <div className='img__navbar_div'>
        <span className={`img__navbar_span ${currentState === 4  ? 'img__navbar_spanActive' : ''}`} onClick={() => {changePhase(4)}}>Projects</span>
        <span className={`img__navbar_span ${currentState === 2 ? 'img__navbar_spanActive' : ''}`} onClick={() => {changePhase(2)}}>Contact</span>
        <span className={`img__navbar_span ${currentState === 1 ? 'img__navbar_spanActive' : ''}`} onClick={() => {changePhase(1)}}>About me</span>
        
        <span className={`img__navbar_span ${currentState === 3  ? 'img__navbar_spanActive' : ''}`} onClick={() => {changePhase(3)}}>Resume </span>
        
        <a target="_blank" rel="noopener noreferrer"  href='https://bloghavir.vercel.app/' className={`img__navbar_span img__navbar_spanBlog`}>BLOG</a>
      
        </div>

  )
}

export default Navbar