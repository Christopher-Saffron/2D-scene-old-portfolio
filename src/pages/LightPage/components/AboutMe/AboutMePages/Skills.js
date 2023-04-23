import React, {useRef} from 'react'
// I've been tinkering with blender since kindergarten, but it wasn't anything given that i couldn't understand english which resulted in some terrible effectiveness issues, like - restarting the whole program to return to the stage i was before, not knowing that EDIT MODE and OBJECT MODE are two different stages.
// The only thing I made that was somewhat worthy was my room which i measured IRL and tried to reproduce 1:1 with textures, I have no pictures nor screenshots of that as I wasn't collecting PROOF for my future portfolio. + I  didnt feel like that was something huge.
const Skills = () => {
  const mainDiv = useRef(null);

  const scrollToElement = (elementClass) => {
    console.log(elementClass, mainDiv.current)


    mainDiv.current.scrollTop = document.querySelector(`[data-content=${elementClass}`).offsetTop;
  }

  return (
    <>
        <div className='bigPage__holder_title'>
            <ruby>
            SKILLS <rt> 能力 </rt>
            </ruby> 
        </div>

       
        <div className='bigPage__holder_mainText' ref={mainDiv}>
        <p className='bigPage__holder_subtitle'>
             Quick access
        </p>
           
            <div className='bigPage__holder_mainText_middleFlexBox'>      
             <div className='bigPage__holder_quickAccess'>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('webdev')}}>Web Development</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('model')}}>3D Modeling</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('bricscad')}}>BricsCAD</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('video')}}>Video editing</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('image')}}>Image editing</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('sound')}}>Sound editing</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('corel')}}>CorelDraw</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('unity')}}>Unity</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('excel')}}>Microsoft Excel</span>
              <span className='bigPage__holder_chip' onClick={() => {scrollToElement('other')}}>Other</span>
             </div>
            </div>
            

            {/* ///////////////////////////////////
            /////////////////////////////////// WEB DEV
            /////////////////////////////////// */}

            <p className='bigPage__holder_subtitle' data-content='webdev' style={{marginTop: '65px'}}>
               WEB DEVELOPMENT
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              I like to know all aspects of things, so I tend to experiment with <span className='bigPage__holder_mainText_important'>frontend</span>, <span className='bigPage__holder_mainText_important'>backend</span> and <span className='bigPage__holder_mainText_important'>design</span>.  <br /> I have projects involving all of these.  <br /> Many of them may also include libraries/tools/packages such as <span className='bigPage__holder_mainText_important'>GSAP</span>, <span className='bigPage__holder_mainText_important'>react-spring</span>, <span className='bigPage__holder_mainText_important'>MUI</span>, <span className='bigPage__holder_mainText_important'>BootStrap</span>, <span className='bigPage__holder_mainText_important'>tailwind</span>, <span className='bigPage__holder_mainText_important'>web-socket</span>, <span className='bigPage__holder_mainText_important'>three.js</span> and many more. 
            </p>
            <div className='bigPage__holder_mainText_middleGridBox'>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/js.png' alt='' />
                <span className='gridBox_span'>JAVASCRIPT</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/mongodb.jpg' alt='' />
                <span className='gridBox_span'>MONGOOSE</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/mysql.png' alt='' />
                <span className='gridBox_span'>MYSQL</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/react.png' alt='' />
                <span className='gridBox_span'>REACT</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/node.png' alt='' />
                <span className='gridBox_span'>Node</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/gsap.png' alt='' />
                <span className='gridBox_span'>GSAP</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/reacctspring.png' alt='' />
                <span className='gridBox_span'>React Spring</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/reactredux.png' alt='' />
                <span className='gridBox_span'>React Redux</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/nextjsLogo.png' alt='' />
                <span className='gridBox_span'>Next.JS</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/firebase.jpg' alt='' />
                <span className='gridBox_span'>Firebase</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/bootstrap.png' alt='' />
                <span className='gridBox_span'>Bootstrap</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/tailwind.png' alt='' />
                <span className='gridBox_span'>Tailwind</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/threejs.png' alt='' />
                <span className='gridBox_span'>ThreeJS</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/sass.svg' alt='' />
                <span className='gridBox_span'>SASS</span>

              </div>
              
            </div>

            <div className='bigPage__holder_mainText_readMore'>
              <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              <div className='bigPage__holder_mainText_moreTab '>
                <div className='bigPage__holder_mainText_moreTab_inside'>My first contact with Javascript happened in 2019 where I had undergone a <a  target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'>course at Udemy.com by Dr. Angela Yu.</a> Then I began practicing on <a  target="_blank" rel="noopener noreferrer" href='https://www.freecodecamp.org/'>freecodecamp</a> and <a  target="_blank" rel="noopener noreferrer" href='https://www.theodinproject.com/'>The Odin Project</a>. </div>
                <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              </div>
              
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// 3D MODELING
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='model' style={{marginTop: '65px'}}>
               3D MODELING
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              3d modeling has been around me for quite some time. I have downloaded blender for the first time in kindergarten when I was hosting a server with my cousin for GTA San Andreas and wanted to create some custom content for the game.
            </p>

            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(1, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/blender.jpg' alt='' />
                <span className='gridBox_span'>BLENDER</span>

              </div>
            </div>

            <p className='bigPage__holder_mainText_funFact'>
              I've been tinkering with blender since kindergarten, but it wasn't anything great, given that I couldn't understand english back then, which resulted in some terrible efficiency issues. I managed to recreate my room in a 1:1 scale with textures made from an old Nokia phone. Big achievement for a small kid.
            </p>

            <div className='bigPage__holder_mainText_readMore' style={{marginTop: '25px'}}>
              <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              <div className='bigPage__holder_mainText_moreTab '>
                <div className='bigPage__holder_mainText_moreTab_inside'>
                  I've sold a couple of 3D Models to people online, but now, when people ask/pay I use it mostly to tweak things or add details/accessories for people who later on use them as avatars in games like VRChat.
                </div>
                <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              </div>
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// BRICSCAD
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='bricscad' style={{marginTop: '65px'}}>
            BRICSCAD
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              This software is just a less expensive AutoCAD copy. I use it for 2D road/traffic projects when working with my dad.
            </p>
            

            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(1, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/bricscad.png' alt='' />
                <span className='gridBox_span'>BRICSCAD</span>

              </div>
            </div>

            <div className='bigPage__holder_mainText_readMore' style={{marginTop: '25px'}}>
              <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              <div className='bigPage__holder_mainText_moreTab '>
                <div className='bigPage__holder_mainText_moreTab_inside'>
                  I have been preparing maps and driving through offices, and designing solutions for smaller projects for my dad for years now. Becoming a 'road' designer was essentially guaranteed, but this work really doesn't appeal to me as much as coding. And thus, I'm on my way to change it.
                </div>
                <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              </div>
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// VIDEO EDITING
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='video' style={{marginTop: '65px'}}>
            VIDEO EDITING
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              It all kicked off from my group's attempt on becoming Youtubers around 10 years ago. At first we used the software to just cut the footage, then as years passed we started picking up better and better editing habits. Now I use these skills mostly for tiktoks and simple edits for website needs.
              <br/>
              
            </p>


            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/sonyvegas.jpg' alt='' />
                <span className='gridBox_span'>Sony vegas PRO</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/davinci.jpg' alt='' />
                <span className='gridBox_span'>Davinci Resolve</span>

              </div>
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// IMAGE EDITING
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='image' style={{marginTop: '65px'}}>
            IMAGE EDITING
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              Editing pictures and making/preparing maps for future use in Bricscad. Despite it being a simple software, Paint and Paint.net have been extremely useful. They both have one function each that can't be found in Gimp - my all time go to.
            </p>
           

            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/gimp.jpg' alt='' />
                <span className='gridBox_span'>GIMP</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/paint.jpg' alt='' />
                <span className='gridBox_span'>PAINT</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/paintnet.jpg' alt='' />
                <span className='gridBox_span'>Paint.net</span>

              </div>
            </div>



            <div className='bigPage__holder_mainText_readMore' style={{marginTop: '25px'}}>
              <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              <div className='bigPage__holder_mainText_moreTab '>
                <div className='bigPage__holder_mainText_moreTab_inside'>
                  It might sound hilarious but many times buying premade maps just wasn't worth the price, since road work happens everyday and everywhere, in order to be up-to-date, there would be a need to buy a map for every project. Adding up the gas prices, printing costs, sometimes even 10-30 sheets of A3/A4 paper for each office - it can all add up to 150 pages. So making them on your own was many times much cheaper.
                </div>
                <p className='bigPage__holder_mainText_readMoreOpening'  onClick={(e) => {e.stopPropagation(); console.log(e.target.parentElement.parentElement.classList.toggle('bigPage__holder_mainText_readMore_open'))}}>Read </p>
              </div>
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// SOUND EDITING
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='sound' style={{marginTop: '65px'}}>
            SOUND EDITING
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              Not much to say here, If I need to fix something, mute something, make a certain sound play only from left/right side, I have these programmes.
            </p>


            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/audacity.jpg' alt='' />
                <span className='gridBox_span'>AUDACITY</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/sonyvegas.jpg' alt='' />
                <span className='gridBox_span'>Sony vegas pro</span>

              </div>
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// CORELDRAW
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='corel' style={{marginTop: '65px'}}>
            CORELDRAW
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              I used this software to cut out traffic sign symbols from a plotter.
            </p>
            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(1, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/coreldraw.jpg' alt='' />
                <span className='gridBox_span'>CORELDRAW</span>

              </div>
            </div>

            <p className='bigPage__holder_mainText_funFact'>
              Surprisingly, using cut out symbols and pinning them up on traffic signs is not only allowed, but also a common practice. In fact, it's much more planet friendly - since if they don't corrode, it's possible to clean them up and reuse them with different symbols!
            </p>

            {/* ///////////////////////////////////
            /////////////////////////////////// UNITY
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='unity' style={{marginTop: '65px'}}>
            UNITY
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              Unfortunately, I worked only on and SDK from a company called VRChat, there I had to make my way through COUNTLESS amounts of bugs to make sure 3d models I made for clients, friends and myself, could work somewhat properly.
            </p>
            

            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/unity.jpg' alt='' />
                <span className='gridBox_span'>UNITY</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/vrchat.jpg' alt='' />
                <span className='gridBox_span'>VRCHAT SDK 2.0</span>

              </div>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/vrchat.jpg' alt='' />
                <span className='gridBox_span'>VRCHAT SDK 3.0</span>

              </div>
            </div>

            {/* ///////////////////////////////////
            /////////////////////////////////// MICROSOFT EXCEL
            /////////////////////////////////// */}


            <p className='bigPage__holder_subtitle' data-content='excel' style={{marginTop: '65px'}}>
            MICROSOFT EXCEL
            </p>
            <p className='bigPage__holder_mainText_paragraph'>
              In my work I had to make/prepare maps for future projects, clean up traffic signs, cut out symbols from plotters, put the symbols on the traffic sign faces but ALSO keep account of one out of two garages of equipment. It was necessary to learn basics of excel to survive in such hasty environment.
            </p>
            <div className='bigPage__holder_mainText_middleGridBox' style={{gridTemplateColumns: 'repeat(1, 1fr)'}}>
              <div className='gridBox'>
                <img className='gridBox_smallImage' src='./icons/excel.jpg' alt='' />
                <span className='gridBox_span'>EXCEL</span>

              </div>
            </div>


            <p className='bigPage__holder_subtitle' data-content='other' style={{marginTop: '65px'}}>
              OTHER
            </p>
            <p className='bigPage__holder_smallInfo'><span className='bigPage__holder_smallInfo_important'>Team working ability</span> - I like working with people. At my last job I had a lot of talking in it, I might have worse days where talking isn't my thing, but mostly I'm up for it!</p>
            <p className='bigPage__holder_smallInfo'><span className='bigPage__holder_smallInfo_important'>Computer skills</span> - I'm extremely interested in everything PC related, if I don't know it, sooner or later, I want to learn it.</p>
            <p className='bigPage__holder_smallInfo'><span className='bigPage__holder_smallInfo_important'>Problem solving</span> - I had to fix and take care of all my electronics since young age, and became the family's IT Guy. Even at my work I had found solutions to PC problems I shouldn't even mention here.</p>
            <p className='bigPage__holder_smallInfo'><span className='bigPage__holder_smallInfo_important'>Organisation skills</span> - Being in charge of a garage full of items that come and go literally 24/7, as it operates day and night requires a little bit of mental toughness. I had to organise, filter, sort, buy and distribute them. I wanted to manage it even better so I started creating a website for it. </p>
            <p className='bigPage__holder_smallInfo'><span className='bigPage__holder_smallInfo_important'>Patience</span> - Patient towards people, for my projects and myself. I don't mind putting days, weeks, months and even years to create something that could serve me well.</p>
            <p className='bigPage__holder_smallInfo'><span className='bigPage__holder_smallInfo_important'>Perseverance</span> - I'm proud to say that I do not quit until I get what I want or need.</p>
            
            

              <p style={{fontFamily: 'Franklin Gothic, Gill Sans, sans-serif', fontSize: '2rem'}}>Thank You for reading!</p>

            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        </div>
    </>
  )
}

export default Skills