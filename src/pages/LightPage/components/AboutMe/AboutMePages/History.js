import React from 'react'
import './historyStyles.scss'

// import {model, model2, python, unity, unity2, unity3, bricscad1, bricscad2} from '../../../constants/images'

import bricscad1 from './images/bricscad.png'
import bricscad2 from './images/bricscad2.jpg'
import model1 from './images/model.jfif'
import model2 from './images/model2.jfif'
import unity1 from './images/unity.jpg'
import unity2 from './images/unity2.jpg'
import unity3 from './images/unity3.jpg'

const History = ({showInModal}) => {
  return (
    <>
        <div className='bigPage__holder_title'>
            <ruby>
            History <rt> 職歴 </rt>
            </ruby> 
        </div>

       
        <div className='bigPage__holder_mainText'>
          <div className='bigPage__holder_timeline_pillar_box'>
            <div className='bigPage__holder_timeline_pillar' />

            {/* fake div to keep the timeline pillar a little bit higher */}
            <div style={{width: '100%', background: 'transparent', height: '1px'}}>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2008
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                First contact with Blender software
              </div>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2011
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                First contact with Sony Vegas Pro
              </div>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2018
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Graduated High School <a target="_blank" rel="noopener noreferrer"  href='https://www.zsswiatniki.pl/'>Zespół Szkół w Świątnikach Górnych</a>
              </div>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Started helping my dad in his work and eventually learned road designing in BricsCAD
              </div>
            </div>
            
            <div className='bigPage__holder_gallery'  >
              <div className='bigPage__holder_galleryBox'>
                  <img  onClick={(e) => {showInModal(e.target.src) }}  src={bricscad1} alt=''  className='bigPage__holder_galleryImg' />
                  <p className='bigPage__holder_galleryText'>Preparing maps</p>
                </div>
              <div className='bigPage__holder_galleryBox'>
                <img onClick={(e) => { showInModal(e.target.src) }}  src={bricscad2} alt=''  className='bigPage__holder_galleryImg' />
                <p className='bigPage__holder_galleryText'>Road designing</p>
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Began studying for Computer Science major at <a target="_blank" rel="noopener noreferrer" href='https://www.agh.edu.pl/'>AGH University of Science and Technology</a>
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Dropped out of University due to unsatisfying lessons.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Sold my first 3D model made in Blender.
              </div>
            </div>

            <div className='bigPage__holder_gallery' >
              <div className='bigPage__holder_galleryBox'>
                <img onClick={(e) => { showInModal(e.target.src) }}  src={model1} alt=''  className='bigPage__holder_galleryImg' />
                <p className='bigPage__holder_galleryText'>First sold model</p>
              </div>
              <div className='bigPage__holder_galleryBox'>
                <img onClick={(e) => { showInModal(e.target.src) }}  src={model2} alt=''  className='bigPage__holder_galleryImg' />
                <p className='bigPage__holder_galleryText'>Reference picture</p>
              </div>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Started coding on the side on my own.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box'>
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2019
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Additionally decided to pick up learning Japanese language and making it my main objective for the year.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Started learning UNITY to upload my 3d models into a VR game. Eventually leading into doing some quick jobs for people.
              </div>
            </div>

            <div className='bigPage__holder_gallery' >
              <div className='bigPage__holder_galleryBox'>
                <img onClick={(e) => { showInModal(e.target.src) }}  src={unity1} alt=''  className='bigPage__holder_galleryImg' />
                <p className='bigPage__holder_galleryText'>Quick change - before</p>
              </div>
              <div className='bigPage__holder_galleryBox'>
                <img onClick={(e) => { showInModal(e.target.src) }}  src={unity2} alt=''  className='bigPage__holder_galleryImg' />
                <p className='bigPage__holder_galleryText'>Quick change - after</p>
              </div>
              <div className='bigPage__holder_galleryBox'>
                <img onClick={(e) => { showInModal(e.target.src)}}  src={unity3} alt=''  className='bigPage__holder_galleryImg' />
                <p className='bigPage__holder_galleryText'>Simple prop adding</p>
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                After a year of practicing japanese to have a better start, I had been rejected from the university.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2020
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Due to a family crisis I had essentially spent a whole year at home, helping as much as possible.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2021
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Started working at a Road construction company in Kraków. My task was to prepare traffic signs that would go onto the road.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                In the office part of the company, I have also started preparing maps for projects.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Became in charge of organizing and controlling the warehouse.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Additionally had to make calls to traffic signs producers and make deals with them.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Due to labour shortage I had also started working in the office, managing videos of roads - these videos would be sold to potential road designers.
              </div>
            </div>

            <div className='bigPage__holder_timeline_box' >
              <div className='bigPage__holder_timeline_horizontalPath' />
              <div className='bigPage__holder_timeline_year' >
                2022
              </div>
              <div className='bigPage__holder_timeline_horizontalPathLong' />
              <div className='bigPage__holder_timeline_text' >
                Quit my job and focused fully on helping my father with road projects, and coding in my spare time.
              </div>
            </div>

          </div>
          <p style={{fontFamily: 'Franklin Gothic, Gill Sans, sans-serif', fontSize: '2rem'}}>Thank You for reading!</p>

            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        </div>
    </>
  )
}

export default History