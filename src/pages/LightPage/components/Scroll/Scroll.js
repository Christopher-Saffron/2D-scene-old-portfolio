import React, {useEffect} from 'react'
import './styles.scss';

const Scroll = ({IMAGES, title, kanji, setUserScroll}) => {
  return (
    <div className='scroll__holder' onClick={() => {setUserScroll(title)}}>
        <span className='scroll__title'>{title}</span>
        <div className='scroll__insidePaper' >
            <div className='scroll__insidePaper_text'>
            {kanji}
            </div>
            
        </div>
        <img className='scroll__handle scroll__handle_top' src={IMAGES['scrollRoll']} alt='/' />
        <img className='scroll__handle scroll__handle_bottom' src={IMAGES['scrollRoll']} alt='/' />
    </div>
  )
}

export default Scroll