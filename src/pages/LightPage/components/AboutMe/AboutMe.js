import React, {useState, useEffect} from 'react'
import BigPage from './BigPage/BigPage'
import MainContent from './MainContent/MainContent'

import { playScrollSound } from '../AudioPlayer/AudioPlayer'


const AboutMe = ({IMAGES, showInModal, doors}) => {

    // USER-CHOSEN MAIN CONTENT TO SEE
    const [userScroll, setUserScroll] = useState(false)

    ////////////////// PLAY SOUND  WHEN CHANGING THE VIEWED SCROLL
    useEffect(() => {
    ///IF WE ARE NOT IN THE ABOUT ME CATEGORY, DONT PLAY SOUND + DONT PLAY IT ON START
    ///This one is a little tricky, big page has a timeout for 600ms before really changing the userScroll to false, so it would be desynced.
    ///So here we play the sound WHEN SCROLL APPEARS, and Big page handles the sound WHEN THE SCROLL CLOSES
    if (!userScroll) {return}
    //play sound on scroll open and close
     playScrollSound();
    }, [userScroll])

  return (
    <>
        {/* WE WAIT UNTIL DOORS ARE OPEN TO SHOW THE CONTENT */}
          <MainContent  IMAGES={IMAGES}  doors={doors}  userScroll={userScroll} setUserScroll={setUserScroll}  />
          <BigPage showInModal={showInModal} IMAGES={IMAGES} userScroll={userScroll} setUserScroll={setUserScroll}  />
       
        
    </>
  )
}

export default AboutMe