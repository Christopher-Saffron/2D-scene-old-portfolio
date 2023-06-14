import React from 'react'
import './styles.scss'
import { door, inside} from './images'

const Stage = ({IMAGES, playOpenFirst, currentState, doors, reOpenDoors, confirmLoading}) => {
  return (
    <>
    {currentState === 1 ? 
        <>
        <img className='img__fullScreen ' src={IMAGES.mainPicOutside} alt='/' onLoad={() => { reOpenDoors(true)}} />
        <img className='img__fullScreen ' src={IMAGES.mainPicPillars} alt='/' />
        </>
        : currentState === 2 ?
        <img className='img__fullScreen ' src={IMAGES.mainPicSecondPhase} alt='/' onLoad={() => { reOpenDoors(true)}} />
        : currentState === 3 ?
        <>
        <img className='img__fullScreen ' src={IMAGES.mainPicNight} alt='/'  onLoad={() => { reOpenDoors(true)}}/>
        <img className='img__fullScreen ' src={IMAGES.mainPicPillars} alt='/' />
        </>
        : currentState === 4 ?
        <img className='img__fullScreen ' src={IMAGES.mainPicFox} alt='/' onLoad={() => { reOpenDoors(true)}} />
        :
        ''
        
      }

      {/* <div className='black' /> */}

      <img className={`img__fullScreen_doorLeft ${doors ? 'img__fullScreen_doorLeft_halfOpen' : ''}`} onAnimationStart={() => {playOpenFirst()}} onLoad={() => {confirmLoading()}} src={door} alt='/' />
      <img className={`img__fullScreen_doorRight  ${doors ? 'img__fullScreen_doorRight_halfOpen' : ''}`}  src={door} alt='/' />
      
      <img className='img__fullScreen  img__inside' src={inside} onLoad={() => { confirmLoading()}} alt='/' />
      </>
  )
}

export default Stage