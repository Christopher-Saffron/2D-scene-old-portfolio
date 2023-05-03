import React from 'react'

const Blog = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> My Blog</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-js, Tailwind, Sanity</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://bloghavir.vercel.app/'>https://bloghavir.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/blog-restored'>https://github.com/Havir-S/blog-restored</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'blog.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Check out</span> what I'm working on right now.
      </p>



      
      
    </>
  )
}

export default Blog