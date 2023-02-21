import React from 'react'
import { unity  } from '../../images'

const SimpleSetupUnity = () => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Simple setup and character upload through VRCHAT SDK</span></p>
          <p><span className='projectShow__secondColor'>Tools used:</span> Unity, Blender, Gimp, VRCHAT SDK</p>
          <p><span className='projectShow__secondColor'>Live Link:</span></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={unity} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>VRCHAT</span> requires any avatar TO-BE uploaded to the game to be setup in Unity alongside their SDK. As some might find this process troublesome, I have 'helped' folks with various setups, bugs and missing files problems.
      </p>

      <div className='projectShow__picturesGrid'>

        <div className='projectShow__picturesGrid_element'>
          <img src={unity} alt='' />
          <p className='projectShow__picturesGrid_p'>Singular map projection</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img src={unity} alt='' />
          <p className='projectShow__picturesGrid_p'>Bigger map preview</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img src={unity} alt='' />
          <p className='projectShow__picturesGrid_p'>A couple projects worth of maps</p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img src={unity} alt='' />
          <p className='projectShow__picturesGrid_p'>Another batch of maps</p>
        </div>

        
      </div>
    </>
  )
}

export default SimpleSetupUnity