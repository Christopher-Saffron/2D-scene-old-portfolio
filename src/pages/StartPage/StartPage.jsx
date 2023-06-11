import React, { useState, useLayoutEffect, useEffect } from "react";
import Particle from "./components/Particle.jsx";
import Ui from "./components/UI.jsx";
import Footer from "./components/Footer.jsx";
import TopUi from "./components/TopUi.jsx";

import "./styles.scss";
import ViewProjectsOnly from "./components/ViewProjectsOnly.jsx";

const StartComponent = ({ webpageMode, handleClick }) => {
  //For the quick preview
  const [quickPreview, toggleQuickPreview] = useState(false);

  //COLOR and particle settings
  const [color, setColor] = useState("#fff");
  const [showParticles, setShowParticles] = useState(true);
  const [foxScale, setFoxScale] = useState(1.1);

  function changeFoxSize() {
    if (window.innerWidth > 1400) {
      if (foxScale === 1.1) {
        return;
      }
      setFoxScale(1.1);
    } else if (window.innerWidth > 1300 && window.innerWidth < 1400) {
      if (foxScale === 0.9) {
        return;
      }
      setFoxScale(0.9);
    } else if (window.innerWidth > 1200 && window.innerWidth < 1300) {
      if (foxScale === 0.7) {
        return;
      }
      setFoxScale(0.7);
      setShowParticles(true);
    } else if (window.innerWidth < 1200) {
      if (foxScale === 0.6) {
        return;
      }
      setShowParticles(false);
    }
  }

  useLayoutEffect(() => {
    changeFoxSize();
  });

  useEffect(() => {
    window.addEventListener("resize", changeFoxSize);
    return () => {
      window.removeEventListener("resize", changeFoxSize);
    };
  }, []);

  return (
    <div className="StartComponent__holder">
      {!("ontouchstart" in window) && (
        <div className="App_particleDiv">
          <Particle
            setShowParticles={setShowParticles}
            showParticles={showParticles}
          />
        </div>
      )}

      <Footer color={color} webpageMode={webpageMode} />

      <Ui
        toggleQuickPreview={toggleQuickPreview}
        color={color}
        setColor={setColor}
        handleClick={handleClick}
      />

      {quickPreview && (
        <ViewProjectsOnly toggleQuickPreview={toggleQuickPreview} />
      )}
    </div>
  );
};

export default StartComponent;
