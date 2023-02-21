import React, {useEffect, useState} from 'react'
import './styles.scss'

import {Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, HueSaturation, Pixelation, ChromaticAberration, Scanline, GodRays, SSAO, ToneMapping, BrightnessContrast, SMAA, Outline } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, BlendFunction   } from 'postprocessing'
import { easings, useSpring } from "react-spring";
import { gsap } from "gsap";


import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import LoadingComponent from '../LoadingComponent/LoadingComponent';



//////// RECTANGLE STARTUP
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import BackgroundVidLoop from './assets/video/BackgroundVidLoop.mp4'
import RectangleGate from './components/startScreen/RectangleGate/RectangleGate';
// import AnimatedFrame4 from './components/startScreen/RectangleGate/AnimatedFrame4';
import RectangleGateNav from './components/startScreen/RectangleGateNav/RectangleGateNav';
import RectangleGateFooter from './components/startScreen/RectangleGateFooter/RectangleGateFooter'

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const vidSrc = BackgroundVidLoop;

const HeavyPage = () => {

  useEffect(() => {

    let myPromise = new Promise((resolve,reject) => {
      const vid = document.createElement('video');
      vid.src = vidSrc;
      // vid.oncanplay = () => {console.log('can play')}
      // vid.onloadstart = () => {console.log('started loading')}
      // vid.ondurationchange = (e) => {console.log(e)}

      // vid.classList.add('mainVideo')
      // vid.mute = true;
      // vid.loop = true;
      vid.setAttribute('muted', true);
      // vid.play();
      // vid.pause();
      // vid.controls = true;
      
      // vid.onload = () => {console.log('loaded')}
      // vid.onloadedmetadata = () => {console.log('metadata')}
      // vid.onloadeddata = () => {console.log('loaded data')}
      
      vid.load();   //// IMPORTANT STEP, WITHOUT IT THE WHOLE ELEMENT JUST FIRES OFF ALL EVENTS AT ONCE THINKING IT'S DONE A GREAT JOB - which is, in fact, a profound lie
      // vid.onprogress = (e) => {console.log(e)}
      vid.oncanplaythrough = () => {console.log('can play through'); resolve(vid); confirmLoading()}
      console.log(vid.readyState)
      
    })

    myPromise.then((val) => {
      console.log(val.src)
    })


    // const loadImage = (image) => {
    //   return new Promise((resolve, reject) => {
    //     const loadImg = new Image();
    //     loadImg.src = image.url;
    //     loadImg.onload = () => {
    //       confirmLoading();
    //       resolve(image.url)
    //     }
    //     loadImg.onerror = err => reject(err);
    //   })
    // }

    // Promise.all(IMAGES.map(image => loadImage(image)))
    //   .catch(err => console.log('Failed to load something', err))
  },[])


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO: THERE IS SOME useGLTB maybe use it for loading
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TODO: ACTUALLY ITS OK TO MAKE IT ON ANOTHER WEBSITE AND JUST LINK IT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jUST MAKE A LINE THAT SAYS CHECK OUT MY PORTFOLIO IN 3D OR SOMETHING
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ITS JUST GONNA LOOK LIKE YOU'RE CONSTANTLY WORKING ON IT!!

    //// LOADING STATUS
    const [loading, toggleLoading] = useState(true);
    /// loading number, NOT SCREEN STAGE
    const [loadingState, increaseLoadingState] = useState(0);

    const [stage, setStage] = useState(0);

        /// CHECK IF LOADING COMPLETE - function used everytime the main images load
    const confirmLoading = () => {

      increaseLoadingState(prevState => { return prevState + 1})
    }
    //// CHECK IF LOADING COMPLETE
    useEffect(() => {
      if (loadingState === 1) {
        //IF BOTH ELEMENTS LOADED - WAIT 1s and play sound effect
        setTimeout( () => {toggleLoading(false)}, 1000 )
      }
    }, [loadingState])
  return (
    <>
      {!loading && (
        <div className='HeavyPage' style={loading ? {display: 'none'} : {}}>
          <VideoPlayer vid={vidSrc} />
        </div>
      )}
        <RectangleGateNav />
        
        <RectangleGateFooter />
        {/* <Canvas camera={{fov: 90, position:[.5, 1.15, 4.95], rotation:[0, Math.PI / 2, 0]}} shadows={true} invalidateframeloop={true} frameloop={'demand'}  shadowMap ></Canvas> */}
        <Canvas camera={{fov: 90, position:[.5, 0, 4.95], rotation:[0, Math.PI / 2, 0]}} shadows={true} invalidateframeloop={'true'} frameloop={'demand'}  shadowmap="true" >
          <EffectComposer stencilBuffer={true}>
            <Bloom luminanceThreshold={.573} resolutionScale={1} mipmapBlur={true} levels={5} intensity={25} radius={.6}  opacity={1} luminanceSmoothing={.06} />
            <Noise opacity={.05} />
          </EffectComposer>
            
          {/* <AnimatedFrame4 /> */}
          <RectangleGate />
        </Canvas>
        <LoadingComponent loading={loading} procent={loadingState * 7.6923} />

    </>
  )
}

export default HeavyPage