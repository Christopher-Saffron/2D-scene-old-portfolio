import React, {useState, useEffect} from 'react'


import certangelayu from './images/certangelayu.png'
import certgame from './images/certgame.png'

const Education = ({showInModal}) => {


  return (
    <>
        <div className='bigPage__holder_title'>
            <ruby>
            EDUCATION <rt> 教育 </rt>
            </ruby> 
        </div>

       
        <div className='bigPage__holder_mainText'>
        <p className='bigPage__holder_subtitle'>
             High school
        </p>
        <p className='bigPage__holder_smallInfo'>
          I have attended High School named <a  target="_blank" rel="noopener noreferrer" href='https://www.zsswiatniki.pl/'>Zespół Szkół w Świątnikach Górnych</a> and finished it in year 2018. 
          <br />
          My class had "extended" Geography, Math and English classes.
        </p>

        <p className='bigPage__holder_subtitle'>
             University
        </p>

        <p className='bigPage__holder_smallInfo'>
         In 2019 I have attended University in Poland called <a  target="_blank" rel="noopener noreferrer" href='https://www.agh.edu.pl/'>AGH University of Science and Technology</a>. Trying to major in Computer Science, however I have decided to drop out as it didn't like the execution of some things.
        </p>

        <p className='bigPage__holder_smallInfo'>
         Next year, which was 2020, I have spent purely on learning japanese on my own from books and various apps and guides, and eventually started talking to people online in order to practice it. I had waited an entire year for the admissions to college that would offer me lessons on japanese language and/or culture, but unfortunately I was not accepted.
        </p>

        <p className='bigPage__holder_subtitle'>
             Courses
        </p>
        <p className='bigPage__holder_smallInfo'>
         In my spare time I have undergone courses on <a  target="_blank" rel="noopener noreferrer" href='https://www.udemy.com'>UDEMY.com.</a>
         <br /><br />
         I have finished the <a  target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'>The Complete 2019 Web Development Bootcamp</a> by Dr. Angela Yu.
         </p>

         <img onClick={(e) => { showInModal(e.target.src) }} className='bigPage__holder_centerPic' src={certangelayu} alt='' />

         <p className='bigPage__holder_smallInfo'>
         From there on I tried to apply my skills on <a  target="_blank" rel="noopener noreferrer" href='https://www.freecodecamp.org/'>freecodecamp.com</a> and <a  target="_blank" rel="noopener noreferrer" href='https://www.theodinproject.com/'>The Odin Project</a>.
         </p>

         <p className='bigPage__holder_smallInfo'>
         Less important but it can at least serve as a filler, I created a small game as an introduction to Web Development -<a  target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/code-your-first-game/'> Code Your First Game: Arcade Classic in JavaScript on Canvas</a> by Chris DeLeon.
         </p>

         <img onClick={(e) => { showInModal(e.target.src) }} className='bigPage__holder_centerPic' src={certgame} alt='' />
         

         <br /><br /><br />
            

        <p style={{fontFamily: 'Franklin Gothic, Gill Sans, sans-serif', fontSize: '2rem'}}>Thank You for reading!</p>

            <br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        </div>
    </>
  )
}

export default Education
