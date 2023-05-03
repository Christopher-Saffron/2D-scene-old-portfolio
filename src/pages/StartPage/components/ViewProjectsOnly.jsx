import React, {useState} from 'react'
import { PROJECTLIST } from './PROJECTLIST';

const ViewProjectsOnly = ({toggleQuickPreview}) => {
  const [visibleProject, setVisibleProject] = useState({});

  const animateLeave = () => {
    document.querySelector('.fastPreview__tab').classList.toggle('fastPreview__tab_hide');
  }

  return (
    <div className='fastPreview__tab' onAnimationEnd={(e) => {if (e.target.classList.contains('fastPreview__tab_hide')) {toggleQuickPreview(false)}}}>

        <div className='fastPreview__tab_display'>
          
          {visibleProject?.name && (
            <div className='fastPreview__tab_displayMain'>
            <img className='fastPreview__tab_displayMain_pic' src={`./${visibleProject.img}`} alt='' />
            <div className='fastPreview__tab_info'>
              <p className='fastPreview__tab_displayMain_itemName'>{visibleProject.name}</p>
              <p className='fastPreview__tab_displayMain_itemDescription'>{visibleProject.description}</p>
              <p className='fastPreview__tab_displayMain_itemLink'>Live Link: <a target="_blank" rel="noopener noreferrer" href={visibleProject?.link}>{visibleProject?.link}</a></p>
              <p className='fastPreview__tab_displayMain_itemLink'>Github Repo: <a target="_blank" rel="noopener noreferrer" href={visibleProject?.linkGithub}>{visibleProject?.linkGithub}</a></p>
            </div>
          </div>
          )}
            
        </div>

        <div className='fastPreview__tab_scroll'>
          <div className='fastPreview__tab_scrollContainer'>
          {PROJECTLIST.map((project,id) => (

            <div onClick={() => {setVisibleProject(project)}} key={id} className='fastPreview__tab_item'> 
              <img className='fastPreview__tab_itemImg' src={`./${project.img}`} alt='' />
              <p className='fastPreview__tab_itemName'>{project.name}</p>
              <p className='fastPreview__tab_itemDescription'>{project.description}</p>
              <a target="_blank" rel="noopener noreferrer" href={project?.link} className='fastPreview__tab_itemName'>{project?.link}</a>
              <a target="_blank" rel="noopener noreferrer" href={project?.linkGithub} className='fastPreview__tab_itemDescription'>{project?.linkGithub}</a>
            </div>
          ))}
         
          
          </div>
          {/* <div onClick={() => {toggleQuickPreview(false)}} className='fastPreview__tab_return'> */}
          <div onClick={() => {animateLeave();}} className='fastPreview__tab_return'>
            <span>Go back to menu</span>
          </div>
        </div>
    </div>
  )
}

export default ViewProjectsOnly