import React from "react";

const Portfolio3D = ({ showInModal }) => {
  return (
    <>
      <div className="projectShow__flexBox">
        <div className="projectShow__infoPanel">
          <p>
            <span className="projectShow__secondColor">Project Title:</span>{" "}
            Portfolio 3D
          </p>
          <p>
            <span className="projectShow__secondColor">Tools used:</span> React,
            Blender, GIMP, Sass, ThreeJS, react-spring
          </p>
          <p>
            <span className="projectShow__secondColor">Websites in total:</span>{" "}
            1
          </p>
          <p>
            <span className="projectShow__secondColor">Live Link:</span>{" "}
            <a
              className="projectShow__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://christophersaffron-3d.vercel.app/"
            >
              https://christophersaffron-3d.vercel.app/
            </a>
          </p>
          <p>
            <span className="projectShow__secondColor">Github:</span>{" "}
            <a
              className="projectShow__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Havir-S/portfolio3d"
            >
              https://github.com/Havir-S/portfolio3d
            </a>
          </p>
        </div>
        <div className="projectShow__flexBox_img">
          <img src={"portfolioheavy2.jpg"} alt="" />
        </div>
      </div>
      <p className="projectShow__paragraph">
        <span className="projectShow__secondColor">This page</span> WAS meant to
        be a showcase for my blender skills, however limitations of browsers are
        strict and making someone download a file of 50mb just to enter a
        website - never happening. So I decided to lower the size as much as
        possible and create a low-poly version of what I had in mind.
      </p>

      <div className="projectShow__picturesGrid">
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy2.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">First frame</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy1.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Project's foxes</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy3.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Creating masks</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy5.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">
            The blooper with 1000 lamps flying
          </p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy6.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">
            With the environment texture
          </p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy4.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Just materials</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy7.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Different perspective 1</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy8.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Different perspective 2</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy9.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Making of the tables</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy10.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Painting textures</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy11.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">
            All merchant tables finished
          </p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy12.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">Basics</p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy13.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">
            Finding the right grass texture
          </p>
        </div>
        <div className="projectShow__picturesGrid_element">
          <img
            onClick={(e) => {
              showInModal(e.target.src);
            }}
            src={"portfolioheavy14.jpg"}
            alt=""
          />
          <p className="projectShow__picturesGrid_p">
            Official look in blender
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio3D;
