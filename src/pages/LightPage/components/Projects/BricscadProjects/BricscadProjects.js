import React from 'react'

import { bricscadProjectsData } from './bricscadProjectsData'


const BricscadProjects = ({setCurrentProject}) => {
  return (
    <div>
      <p className='projects__mainContent_title'>BricsCAD</p>
      <div className='projects__mainContent_grid'>

        {bricscadProjectsData.map(project => {
          return (
            <div onClick={() => {setCurrentProject(project.projectName)}} key={project.projectName} className='projects__mainContent_gridElement'>
              <div className='projects__mainContent_gridElement_picture'>
                <img src={project.imgSrc} alt='' />
                <div className='projects__mainContent_gridElement_pictureShadow' />
              </div>
              <div className='projects__mainContent_gridElement_projectInfo' >
                <div className='projects__mainContent_gridElement_name'>
                  {project.projectName}
                </div>
                <div className='projects__mainContent_gridElement_description'>
                  {project.description}
                </div>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default BricscadProjects