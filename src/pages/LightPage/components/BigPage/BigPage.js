import React, {useRef, useEffect} from 'react'
import './styles.scss'

import Languages from '../AboutMe/AboutMePages/Languages'
import Skills from '../AboutMe/AboutMePages/Skills'
import Education from '../AboutMe/AboutMePages/Education'
import History from '../AboutMe/AboutMePages/History'

import { scrollOnly } from '../Scroll/Scroll'

import { playScrollSound } from '../AudioPlayer/AudioPlayer'

import BigPageImg1 from './images/BigPageImg1.png'
import BigPageImg2 from './images/BigPageImg2.png'
import BigPageImg3 from './images/BigPageImg3.png'
import BigPageImg4 from './images/BigPageImg4.png'
import BigPageImg5 from './images/BigPageImg5.png'
import BigPageImg6 from './images/BigPageImg6.png'

const BigPage = ({userScroll, setUserScroll, changeModalImgSrc, changeIsOpen}) => {
  const mainBigScroll = useRef(null);


  //THE QUICK ACCESS MENU
  const handleCloseScroll = () => {
    //PLAYS THE ANIMATION FOR .6s then changes the variable to make sure the component is out
    mainBigScroll.current.classList.add('bigPage__holder_hide')
    

     //QUICK FIX FOR ANIMATION when closing the scroll but it's enlarged
    if (mainBigScroll.current.classList.contains('bigPage__holder_moreScroll')) {
      mainBigScroll.current.classList.remove('bigPage__holder_moreScroll');
    }
    
    ////ALSO PLAY SOUND !!!!!!!!!
    playScrollSound();
    setTimeout(() => {
      setUserScroll(false)
    }, 600)
  }

  // HIDE TEXT FOR BETTER VISIBILITY
  const toggleTextAmount = (e) => {
    mainBigScroll.current.classList.toggle('bigPage__holder_noText')
    //ALSO CHANGE TEXT BASED ON THE NEW ADDED CLASS TO THE MAIN ELEMENT (SHOW LESS/MORE)

    if (mainBigScroll.current.classList.contains('bigPage__holder_noText')) {
      e.target.innerHTML = 'Show more text'
    } else {
      e.target.innerHTML = 'Show less text'
    }
  }
  // SHOW MORE SCROLL FOR EASIER READING
  const showMoreScroll = (e) => {
    mainBigScroll.current.classList.toggle('bigPage__holder_moreScroll')

    if (mainBigScroll.current.classList.contains('bigPage__holder_moreScroll')) {
      e.target.innerHTML = 'Reduce visible read area'
    } else {
      e.target.innerHTML = 'Enlarge visible read area'
    }
  }


  return (
    <>
      {userScroll && (
        <div ref={mainBigScroll} className='bigPage__holder'>
          <img className='bigPage__scrollHandle bigPage__scrollHandle_top' src={scrollOnly} alt='/' />
          <img className='bigPage__scrollHandle bigPage__scrollHandle_bottom' src={scrollOnly} alt='/' />
          <div className='bigPage__holder_article'>

            {userScroll === 'Languages' ? 
            <>
              <div className=' bigPage__holder_imgHolder2 '>
                <img src={BigPageImg2} alt='' />
              </div>
              <div className='bigPage__holder_imgHolder'>
                <img src={BigPageImg1} alt='' />
              </div>
              <Languages changeModalImgSrc={changeModalImgSrc} />
            </>
              : userScroll === 'Skills' ? 
              <>
                <div className=' bigPage__holder_imgHolder4 '>
                  <img src={BigPageImg3} alt='' />
                </div>
                <div className=' bigPage__holder_imgHolder3 '>
                  <img src={BigPageImg6} alt='' />
                </div>
                <Skills changeModalImgSrc={changeModalImgSrc} />
              </>
              : userScroll === 'Education' ?
              <>
                
                <div className='bigPage__holder_imgHolder1'>
                  <img src={BigPageImg1} alt='' />
                </div>
                <div className=' bigPage__holder_imgHolder2 '>
                  <img src={BigPageImg4} alt='' />
                </div>
                <Education changeIsOpen={changeIsOpen} changeModalImgSrc={changeModalImgSrc} />
                
              </>
              :  userScroll === 'History' ?
              <>
                <div className=' bigPage__holder_imgHolder2 '>
                  <img src={BigPageImg5} alt='' />
                </div>
                <div className=' bigPage__holder_imgHolder4 '>
                  <img src={BigPageImg3} alt='' />
                </div>
                <div className=' bigPage__holder_imgHolder1 '>
                  <img src={BigPageImg1} alt='' />
                </div>
                <History changeIsOpen={changeIsOpen} changeModalImgSrc={changeModalImgSrc} />
                
              </>
              : ''
            }

            <div className='bigPage__holder_options'>
              <div className='bigPage__holder_makeItBiggerButton' onClick={(e) => {showMoreScroll(e)}}>
                Enlarge visible read area
              </div>
              <div className='bigPage__holder_showText' onClick={(e) => {toggleTextAmount(e)}}>
                Show less text
              </div>
            </div> 
            
            
            <div className='bigPage__holder_exitButton_holder' onClick={() => {handleCloseScroll(false)}}>
              <div className='bigPage__holder_exitButton'>
                <img src='./cross.svg' alt='' />
              </div>
            </div>
          </div>
      </div>
      )}
      
    </>
  )
}

export default BigPage