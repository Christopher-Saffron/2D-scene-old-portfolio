import React from 'react'

import { modelsProjectsData } from './modelsProjectsData'


const ModelProjects = ({setCurrentProject}) => {
  return (
    <div>
      <p className='projects__mainContent_title'>3D Models</p>
      <div className=' projects__mainContent_grid projects__mainContent_gridModel'>
        {modelsProjectsData.map(project => {
          return (
            <div  onClick={() => {setCurrentProject(project.projectName)}} key={project.projectName} className='projects__mainContent_gridElement '>
              <div className='projects__mainContent_gridElement_picture'>
                <img src={project.imgSrc} alt='' />
                <div className='projects__mainContent_gridElement_pictureShadow' />
              </div>
              <div className='projects__mainContent_gridElement_projectInfo' >
                <div className='projects__mainContent_gridElement_name'>
                  {project.projectName}
                </div>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default ModelProjects