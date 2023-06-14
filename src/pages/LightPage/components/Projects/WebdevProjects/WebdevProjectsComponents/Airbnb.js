import React from "react";

const Airbnb = () => {
  return (
    <>
      <div className="projectShow__flexBox">
        <div className="projectShow__infoPanel">
          <p>
            <span className="projectShow__secondColor">Project Title:</span>{" "}
            Airbnb v2
          </p>
          <p>
            <span className="projectShow__secondColor">Tools used:</span> React,
            Blender, Mongoose, Mongodb Atlas, Paypal, Stripe, Maps, Three.js,
            Next-js, Tailwind, React-Leaflet,
          </p>
          <p>
            <span className="projectShow__secondColor">Live Link:</span>{" "}
            <a
              className="projectShow__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://havirbnb.vercel.app/"
            >
              https://havirbnb.vercel.app/
            </a>
          </p>
          <p>
            <span className="projectShow__secondColor">Github:</span>{" "}
            <a
              className="projectShow__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Havir-S/havirbnb"
            >
              https://github.com/Havir-S/havirbnb
            </a>
          </p>
        </div>
        <div className="projectShow__flexBox_img">
          <img src={"airbnb.jpg"} alt="" />
        </div>
      </div>
      <p className="projectShow__paragraph">
        <span className="projectShow__secondColor">Using Airbnb</span> as a mean
        to practice with payments as well as maps, databases and some simple 3d
        objects.
      </p>
    </>
  );
};

export default Airbnb;
