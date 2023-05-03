import React from 'react'

const Amazon = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Amazon v2</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, Next-js, Redux, Stripe, Tailwind, Google-auth, Next-auth, Gimp</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://amazon-havir.vercel.app/'>https://amazon-havir.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/amazon-havir'>https://github.com/Havir-S/amazon-havir</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'amazon.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Quick</span> use of dummy API alongside STRIPE to create an imitation of Amazon.
      </p>



      
      
    </>
  )
}

export default Amazon