import React, { useState } from "react";
import "./styles.scss";
import "./styles2.scss";

import WebdevProjects from "./WebdevProjects/WebdevProjects";
import ModelProjects from "./ModelProjects/ModelProjects";
import VideoProjects from "./VideoProjects/VideoProjects";
import BricscadProjects from "./BricscadProjects/BricscadProjects";
import UnityProjects from "./UnityProjects/UnityProjects";

import AllProjectsList from "./AllProjectsList";

// THIS IS THE COMPONENT THAT, BASED ON THE INPUT, SHOWS THE CATEGORY AND ALL SUBPROJECTS OF IT
const CategoryViewer = ({ currentCategory, setCurrentProject }) => {
  return (
    <>
      {currentCategory === "webdev" ? (
        <WebdevProjects setCurrentProject={setCurrentProject} />
      ) : currentCategory === "model" ? (
        <ModelProjects setCurrentProject={setCurrentProject} />
      ) : currentCategory === "videos" ? (
        <VideoProjects setCurrentProject={setCurrentProject} />
      ) : currentCategory === "bricscad" ? (
        <BricscadProjects setCurrentProject={setCurrentProject} />
      ) : currentCategory === "unity" ? (
        <UnityProjects setCurrentProject={setCurrentProject} />
      ) : (
        ""
      )}

      {/* : currentCategory === 'model' ? <ModelProjects setCurrentProject={setCurrentProject} /> 
      : currentCategory === 'videos' ? <VideProjects setCurrentProject={setCurrentProject} />
      : currentCategory === 'bricscad' ? <BricscadProjects setCurrentProject={setCurrentProject} />
      : currentCategory === 'unity' ? <UnityProjects setCurrentProject={setCurrentProject} /> */}
    </>
  );
};

const ProjectLaptop = ({ IMAGES, showInModal }) => {
  const [hideLaptop, toggleHideLaptop] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentProject, setCurrentProject] = useState("none");

  //FOR VISUAL EFFECT DELETE ALL OTHER CATEGORY BOXES AND THEN CHANGE THE CURRENT CATEGORY
  function chooseCategory(category) {
    //DELETE ALL
    document
      .querySelectorAll(`.projects__mainContent_category[data-type]`)
      .forEach((div) => {
        div.style.display = "none";
      });

    setCurrentCategory(category);
  }

  const goBack = () => {
    ///IF WE'RE VIEWING A PROJECT GO BACK TO CATEGORY,
    if (currentProject !== "none") {
      setCurrentProject("none");
    } else {
      //IF WE'RE VIEWING CATEGORY, GO BACK FULL
      setCurrentCategory("none");
    }
  };

  return (
    <div
      className={`projects__LaptopTab ${
        hideLaptop ? "projects__LaptopTab_hide" : ""
      }`}
    >
      <img
        src={IMAGES.laptopTransparent}
        className="projects__LaptopFrame_img"
        alt=""
      />

      {/* SHADOW */}
      <div className="projects__shadow" />
      {/* PROJECT VERSION */}
      <div className="projects__version">Ver 0.94.221</div>
      {/* ASCII ART */}
      <div className="projects__ascii">
        ⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠘⡏⠉⠳⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠶⠶⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⢹⣀⣀⠀⠈⠳⣤⡀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠁⠐⣶⠄⢼⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⣇⠀⠧⠀⠀⠸⣿⣷⡦⣄⠀⠀⠀⢠⣿⡤⠀⡇⠘⡆⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠸⡀⠐⣦⣤⠀⠙⠹⣕⢼⣷⣄⣠⡿⠛⠉⠉⠒⣄⣿⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢧⠚⢻⣿⡷⢦⠀⢿⣼⣏⣺⠟⡇⠀⠀⢀⣶⣶⣾⠀⠀⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢀⠧⡀⠸⣗⠈⠷⠘⠏⢻⠇⠀⠀⣿⠆⣤⣾⣿⡿⠃⢸⣿⣷⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠹⡟⢲⠎⠃⠀⠀⠀⠀⠀⠀⠺⠁⢰⢿⡿⠋⠃⠠⡽⣷⡈⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⠀⠀⠀⠀⢀⣷⡟⠃⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢀⡾⠁⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠘⢶⣷⣲⡛⠉⠰⠦⢄⣹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠈⠙⠳⣆⠀⠀⠀⠀⣿⣷⡦⢤⣀⣰⣦⡀⠀⠓⣤⡘⣕⢤⡀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⣟⡏⠀⠀⠀⣼⠿⠛⠛⠉⠀⣠⡙⠫⣤⣀⠀⢱⣌⢧⠙⢦⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢀⡟⠀⠀⠰⡟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣄⢿⣞⢇⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⣠⠏⠀⠀⠀⢀⣷⣿⣦⣠⠤⠈⠡⠬⠤⠀⠀⢄⡀⠈⢳⡿⣯⢳⡄⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⢀⣾⣥⣄⣀⣠⣤⣿⣿⡿⠙⢃⡤⠶⠀⠀⠀⠀⠀⢠⣧⠀⠀⠁⣿⠀⢹⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠈⢻⣿⣿⠏⠀⠀⠀⣈⣤⠾⠗⠒⠒⠉⠉⠉⠑⠒⠠⢿⡀⠀⠀⢻⢢⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠉⠙⠓⠲⠾⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠲⣼⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </div>

      {hideLaptop && (
        <div
          className="showLaptopButton"
          onClick={() => {
            toggleHideLaptop(false);
          }}
        >
          Show Laptop again
        </div>
      )}

      <div className="projects_mainDiv">
        {/* CATEGORY BOXES */}
        <div className="projects__mainContent_currentCategoryBox">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCurrentCategory("none");
              setCurrentProject("none");
            }}
          >
            Categories
          </span>
          <span> &#62; </span>
          {currentCategory !== null && currentCategory !== "none" && (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCurrentProject("none");
              }}
            >
              {currentCategory}
            </span>
          )}
          {currentProject !== "none" && (
            <>
              <span> &#62; </span>
              <span style={{ cursor: "pointer" }}>{currentProject}</span>
            </>
          )}
          {currentCategory !== null && currentCategory !== "none" && (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                ///IF WE'RE VIEWING A PROJECT GO BACK TO CATEGORY,
                if (currentProject !== "none") {
                  setCurrentProject("none");
                } else {
                  //IF WE'RE VIEWING CATEGORY, GO BACK FULL
                  setCurrentCategory("none");
                }
              }}
            >
              &#60;&#60; Go back
            </p>
          )}
          <div
            className="leaveLaptop"
            onClick={() => {
              toggleHideLaptop(true);
            }}
          >
            X
          </div>
          <div
            className="leaveLaptop leaveLaptopArrow"
            onClick={() => {
              goBack();
            }}
          >
            {"←"}
          </div>
        </div>

        {/* MAIN CONTENT STARTS HERE */}
        <div className="projects__mainContent">
          <div className="projects__animation">
            <p className="projects__animation_text">Connected to PROJECTS...</p>
            <p className="projects__animation_text">
              Welcome Guest{Math.floor(5000 + Math.random() * 9000)}.
            </p>
            <p className="projects__animation_text">Entering the database...</p>
            <p className="projects__animation_text">Fetching all projects...</p>
            <p
              className="projects__animation_text projects__animation_textLast"
              onAnimationEnd={() => {
                setTimeout(() => {
                  document.querySelector(".projects__animation").style.display =
                    "none";
                  document.querySelector(".projects__ascii").style.display =
                    "none";
                  document.querySelector(
                    ".projects__mainContent_currentCategoryBox"
                  ).style.display = "block";

                  //SHOW CATEGORIES MENU
                  setCurrentCategory("none");
                }, 1300);
              }}
            >
              FINISHED.
            </p>
          </div>

          {currentCategory === "none" && (
            <div className="projects__mainContent_chooseCategory">
              <div
                className="projects__mainContent_category"
                data-type="webdev"
                onClick={(e) => {
                  chooseCategory(e.target.dataset.type);
                }}
              >
                WEBDEV
              </div>
              <div
                className="projects__mainContent_category"
                data-type="model"
                onClick={(e) => {
                  chooseCategory(e.target.dataset.type);
                }}
              >
                3D MODEL
              </div>
              <div
                className="projects__mainContent_category"
                data-type="videos"
                onClick={(e) => {
                  chooseCategory(e.target.dataset.type);
                }}
              >
                VIDEOS
              </div>
              <div
                className="projects__mainContent_category"
                data-type="bricscad"
                onClick={(e) => {
                  chooseCategory(e.target.dataset.type);
                }}
              >
                BRICSCAD
              </div>
              <div
                className="projects__mainContent_category"
                data-type="unity"
                onClick={(e) => {
                  chooseCategory(e.target.dataset.type);
                }}
              >
                UNITY
              </div>
            </div>
          )}

          {/* CATEGORY PROJECTS VIEWER */}
          {/* was there */}
          {currentProject === "none" && (
            <CategoryViewer
              showInModal={showInModal}
              currentCategory={currentCategory}
              setCurrentProject={setCurrentProject}
            />
          )}
          {/* /// WAS THERE */}
          <AllProjectsList
            showInModal={showInModal}
            projectName={currentProject}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectLaptop;
