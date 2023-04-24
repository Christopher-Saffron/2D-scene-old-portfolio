import React from 'react'
// import { szafranprojekt6, szafranprojekt3, szafranprojekt2, szafranprojekt5, szafranprojekt7, szafranprojekt8, szafranprojektDevVIDEO } from '../../images'

const SzafranProjekt = ({showInModal}) => {
  return (
    <>
      <div className='projectShow__flexBox'>
        
        <div className='projectShow__infoPanel'>
          <p><span className='projectShow__secondColor'>Project Title:</span> Szafran Projekt</p>
          <p><span className='projectShow__secondColor'>Tools used:</span> React, GIMP, GSAP, Sass, bootstrap-icons, swiper, moment, Axios, react-file-base64, recharts, MUI, Mongoose, React-Leaflet ...</p>
          <p><span className='projectShow__secondColor'>Websites in total:</span> 2</p>
          <p><span className='projectShow__secondColor'>Backends:</span> 1</p>
          <p><span className='projectShow__secondColor'>Live Link:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://szafranprojekt.vercel.app/'>https://szafranprojekt.vercel.app/</a></p>
          <p><span className='projectShow__secondColor'>Github:</span> <a className='projectShow__link' target="_blank" rel="noopener noreferrer" href='https://github.com/Havir-S/szafranprojekt'>https://github.com/Havir-S/szafranprojekt</a></p>
        </div>
        <div className='projectShow__flexBox_img'>
          <img src={'szafranprojekt2.jpg'} alt='' />
        </div>
        
      </div>
      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>tl;dr </span> Szafran Projekt is a small company that belongs to my father, website itself was a gift from me. I also made an admin/archive server that holds all the files and can be connected from both our PCs. Website started as an all-rounded tool for my previous employer, but it wasn't finished. It was also rewritten from scratch once with the current design .
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal('szafranprojekt2.jpg')}} src={'szafranprojekt2.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>Current Landing page </p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}}  src={'szafranprojekt3.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>First design Landing page </p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}}  src={'szafranprojekt6.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>Main page as my last employer's TO-BE server. </p>
        </div>
      </div>

      <video className='projectShow__videoPlayer' src={'szafranprojektDevVIDEO.mp4'} muted controls />
      <p style={{textAlign: 'center', fontSize: '1.5rem', margin: '10px auto'}}>Quick use of the server website to archive all projects.</p>

      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Current version </span> uses the same logo as the version before, which I've prepared. NOT ALL, but most of the elements visible on the website were made or at the very least edited by me. There was also an already prepared server to receive messages coming straight from the client's page. However that functionality has been scrapped as most of the work needs to be properly put 'on paper', in this case through email, visible to both parties.
        <br />
        <br />
        Server is online on an old family PC, and works only on LAN. Still - for security reasons I will not be sharing the code, however I can give You a video presentation.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}}  src={'szafranprojekt7.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>Amount of files during the design phase </p>
        </div>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}}  src={'szafranprojekt8.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>Server website is using MUI </p>
        </div>
      </div>

      <p className='projectShow__paragraph'>
        <span className='projectShow__secondColor'>Oldest version </span> was meant to be my biggest project involving everything I've learned. That includes my early understanding of Three.js. After preparing the 3d model I wanted to connect it to the warehouse server and "spawn" traffic signs in assigned places, so that the workers can see the traffic signs instantly, without wasting 5-10min for finding everything.
      </p>

      <div className='projectShow__picturesGrid'>
        <div className='projectShow__picturesGrid_element'>
          <img onClick={(e) => {showInModal(e.target.src)}}  src={'szafranprojekt6.jpg'} alt='' />
          <p className='projectShow__picturesGrid_p'>Main page as the last employer's TO-BE server. </p>
        </div>
      </div>

      
      
    </>
  )
}

export default SzafranProjekt