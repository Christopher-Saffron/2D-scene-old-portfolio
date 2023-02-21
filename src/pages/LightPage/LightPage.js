import {useState, useEffect, useRef, useCallback, useMemo} from 'react'

import LoadingComponent from '../LoadingComponent/LoadingComponent.jsx'

import Shadow from './components/Shadow/Shadow';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';
import Stage from './components/Stage/Stage';
import InteractiveLamp from './components/InteractiveLamp/InteractiveLamp';
import AboutMe from './components/AboutMe/AboutMe.js';

import ProjectLaptop from './components/Projects/ProjectLaptop';
import ModalComponent from './components/ModalComponent/ModalComponent';

import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

import { scrollRoll, mainPicOutside, mainPicFox, mainPicNight, mainPicPillars, mainPicSecondPhase, wave1, wave2, wave3, wave4, laptopTransparent } from './assets/images/index.js';
import './LightPage.scss'

import {playOpenFirst, playOpenBonk, playOpenNoBonk, playLoadingComplete} from './components/AudioPlayer/AudioPlayer'

const IMAGES = [
  {
    id:0,
    name: 'a',
    url: scrollRoll
  },
  {
    id:1,
    name: 'a',
    url: mainPicNight
  },
  {
    id:2,
    name: 'a',
    url: mainPicOutside
  },
  {
    id:3,
    name: 'a',
    url: mainPicFox
  },
  {
    id:4,
    name: 'a',
    url: mainPicPillars
  },
  {
    id:5,
    name: 'a',
    url: mainPicSecondPhase
  },
  {
    id:6,
    name: 'a',
    url: wave1
  },
  {
    id:7,
    name: 'a',
    url: wave2
  },
  {
    id:8,
    name: 'a',
    url: wave3
  },
  {
    id:9,
    name: 'a',
    url: wave4
  },
  {
    id:10,
    name: 'a',
    url: laptopTransparent
  },
]

const IMAGESDATA = {
  scrollRoll,
  mainPicOutside,
  mainPicFox,
  mainPicNight,
  mainPicPillars,
  mainPicSecondPhase,
  wave1,
  wave2,
  wave3,
  wave4,
  laptopTransparent
}
  
const LightPage = () => {

  //////////////////////////////////////////////////////////////////////////////////////////////// TO DO: PRELOAD IMAGES
  //////////////////////////////////////////////////////////////////////////////////////////////// TO DO: MAKE SURE CONTENT APPEARS ONLY AFTER DOORS ARE OPEN!!!
  //////////////////////////////////////////////////////////////////////////////////////////////// TO DO: ACTUALLY, IF WE PRELOAD IMAGES, AND THEY GONNA APPEAR JUST HOW THEY DO LOCALLY, NO NEED FOR TIMING AND EVERYTHING, IT WILL JUST WORK PERFECTLY EVERY TIME, MINUS THE LOADING TIME
  //////////////////////////////////////////////////////////////////////////////////////////////// DONE TO DO: PROJECTS HAS DIFFERENT FONT, GOTTA FIX IT 
  

  //// PRELOAD IMAGES
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => {
          confirmLoading();
          resolve(image.url)
        }
        loadImg.onerror = err => reject(err);
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .catch(err => console.log('Failed to load something', err))
  },[])

   

  //// LOADING STATUS
  const [loading, toggleLoading] = useState(true);
  const [loadingState, increaseLoadingState] = useState(0);
  
    /// CHECK IF LOADING COMPLETE - function used everytime the main images load
  const confirmLoading = () => {

    increaseLoadingState(prevState => { return prevState + 1})
  }


  //// CHECK IF LOADING COMPLETE
  useEffect(() => {
    if (loadingState === 13) {
      //IF BOTH ELEMENTS LOADED - WAIT 1s and play sound effect
      setTimeout( () => {toggleLoading(false)}, 1000 )
    }
  }, [loadingState])
 

  /// MAIN APP
  const mainApp = useRef(null)
  const body = document.querySelector('body');

  /// AT WHICH PAGE WE ARE RIGHT NOW
  const [currentState, setCurrentState] = useState(0);
  /// CONTROLLING DOORS OPENING / CLOSING
  const [doors, toggleDoors] = useState(false);

  //////////////////
  ////////////////// MODAL
  //////////////////
  
  // VARIABLE TO OPEN/CLOSE MODAL WITH PICTURE
  const [modalIsOpen, changeIsOpen] = useState(false);

  // VARIABLE TO OPEN/CLOSE MODAL WITH PICTURE
  const [modalImgSrc, changeModalImgSrc] = useState(null);

  
  const showInModal = (src) => {
    changeModalImgSrc(src)
    changeIsOpen(true);
  }

  ////////////////////
  //////////////////// WELCOME DIV
  ////////////////////
  const [welcomeDiv, setWelcomeDiv] = useState(1);

  ////////////////////
  //////////////////// CHANGE PAGE ON NAVBAR CLICK
  ////////////////////

  //CHANGING THE PAGE
  const changePhase = (newState) => {
    //IF WE CLICK ON THE SAME LINK PAGE
    if (newState === currentState) {return}
    //CLOSE THE DOORS
    toggleDoors(false);

    //Add class to APP that removes all MAIN CONTENT with animation - about me, contact, resume and projects
    mainApp.current.classList.add('LightPage-HideAll')

    //START UP CLOSE DOORS ON ENTER PAGE
    if (currentState === 0) {
      setCurrentState(newState)
      mainApp.current.classList.remove('LightPage-HideAll')
    } else {
      
      setTimeout(() => {
        setCurrentState(newState)
        mainApp.current.classList.remove('LightPage-HideAll')
      }, 600)
    }
    
  }

  //MIDDLEWARE TO CONTROL THE DOORS
  const reOpenDoors = () => {
    toggleDoors(true);
    
  }

  //GIVE TIME before showing the welcome DIV - no need for GSAP
  // setTimeout(() => {
  //   setWelcomeDiv(1)
  // }, 2000)

  const checkRatio = () => {
    //Height is 'LONGER'
    if (body.offsetHeight > body.offsetWidth) {
      mainApp.current.classList.add('LightPage-rotated')
    } else {
      mainApp.current.classList.remove('LightPage-rotated')
    }
  }

   ///USE IT ONCE LOADING COMPLETE TO CHECK FOR RESIZE
   useEffect(() => {
    if(mainApp && window.onresize === null) {
      checkRatio();
      //// + Add event listener for resizing
      window.addEventListener('resize', () => {
        checkRatio();
      })
      return () => {window.removeEventListener('resize', () => {
        checkRatio();
      })}
    }
  }, [mainApp])


  //ONCE LOADED START PLAYING DOOR SLIDING ALL ACCORDING TO THE doors VALUE
  useEffect(() => {
    //So it doesn't play before the loading is complete and screen interaction is enabled
    if (!loading) {
     if (doors) {
      playOpenNoBonk();
     } else {
      playOpenBonk();
     }
    }
  }, [doors])


  return (
    <>
      <div ref={mainApp} className='LightPage' style={loading ? {display: 'none'} : {}}>
          <Stage  IMAGES={IMAGESDATA}  playOpenFirst={playOpenFirst}  confirmLoading={confirmLoading}  doors={doors} currentState={currentState} reOpenDoors={reOpenDoors} />
          <Shadow />
          <Filter currentState={currentState} />
          <InteractiveLamp />
          <Navbar  changePhase={changePhase} currentState={currentState}  />

          {
            currentState === 1 ? <AboutMe showInModal={showInModal} IMAGES={IMAGESDATA} doors={doors} />
            : currentState === 2 ? <Contact IMAGES={IMAGESDATA} />
            : currentState === 3 ? <Resume />
            : currentState === 4 ? <ProjectLaptop  showInModal={showInModal}  IMAGES={IMAGESDATA} />
            : ''
          }

      </div>
      <ModalComponent isOpen={modalIsOpen} changeIsOpen={changeIsOpen} modalImgSrc={modalImgSrc} />
      <LoadingComponent loading={loading} procent={loadingState * 7.6923} />
    </>
   
  )
}

export default LightPage

     // //// PRELOAD IMAGES
    // useEffect(() => {
    //   const loadImage = (imageName, imageUrl) => {
    //     return new Promise((resolve, reject) => {
    //       const loadImg = new Image();
    //       loadImg.src = imageUrl;
    //       loadImg.onload = () => {
    //         console.log('LOADED IMG', imageUrl)
    //         IMAGES_PRELOADED[imageName] = imageUrl;
    //         confirmLoading();
    //         resolve(imageUrl)
    //       }
    //       loadImg.onerror = err => reject(err);
    //     })
    //   }
  
    //   Promise.all(Object.entries(IMAGES).map(image => {console.log('entries', image); loadImage(image[0],image[1])}))
    //     .then((eh) => console.log(eh,'OWARI'))
    //     .catch(err => console.log('Failed to load something', err))
    // },[])