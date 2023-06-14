import React from "react";

import { webdevProjectsData } from "./webdevProjectsData";

const WebdevProjects = ({ setCurrentProject }) => {
  return (
    <div>
      <p className="projects__mainContent_title">WEB Development</p>
      <div className="projects__mainContent_grid">
        {webdevProjectsData.map((project) => {
          return (
            <div
              onClick={() => {
                setCurrentProject(project.projectName);
              }}
              key={project.projectName}
              className="projects__mainContent_gridElement"
            >
              <div className="projects__mainContent_gridElement_picture">
                <img src={project.imgSrc} alt="" />
                <div className="projects__mainContent_gridElement_pictureShadow" />
              </div>
              <div className="projects__mainContent_gridElement_projectInfo">
                <div className="projects__mainContent_gridElement_name">
                  {project.projectName}
                </div>
                <div className="projects__mainContent_gridElement_description">
                  {project.description}
                </div>
                <div className="projects__mainContent_gridElement_iconsRow">
                  {project?.images &&
                    project.images.map((tag) => {
                      return (
                        <img
                          key={tag}
                          className="projects__mainContent_gridElement_icon"
                          src={tag}
                          alt=""
                        />
                      );
                    })}
                </div>
                <div className="projects__mainContent_gridElement_tags">
                  {project.tags.map((tag) => {
                    return (
                      <div
                        key={tag}
                        className="projects__mainContent_gridElement_tag"
                      >
                        <span style={{ color: "#ffaaaa" }}>#</span>
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebdevProjects;
