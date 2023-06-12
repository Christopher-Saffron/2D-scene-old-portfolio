import React from "react";

//// BASED ON PROVIDED COLOR (THAT CHANGES ON HOVER ON BUTTON) SHOW INFORMATION ABOUT THE POTENTIAL WEBPAGE

const Footer = ({ color, webpageMode }) => {
  return (
    <div
      className={
        `StartPage__Footer` +
        (webpageMode !== "start" ? "StartPage__Footer_disappear" : "")
      }
    >
      {/* {color === '#fff' ? '' 
      : color === '#5ebcff' ? <p className='StartPage__Footer_additionalText' style={{color: '#5ebcff'}}>aaa</p> 
      : color === '#f35eff' ? <p className='StartPage__Footer_additionalText' style={{color: '#f35eff'}}>Heavyweight part has around 15mb of content to download. It </p> 
      : '' } */}
      {color === "#5ebcff" && (
        <p
          className="StartPage__Footer_additionalText"
          style={{ color: "#5ebcff" }}
        >
          Easy and quick access to my projects and all useful information about
          me.
        </p>
      )}
      {color === "#f35eff" && (
        <>
          <p
            className="StartPage__Footer_additionalText"
            style={{ color: "#f35eff" }}
          >
            <span style={{ fontWeight: "bold" }}>3D Scene</span> on Canvas,{" "}
            <span style={{ fontWeight: "bold" }}>video</span> and{" "}
            <span style={{ fontWeight: "bold" }}>music</span> for full
            experience. This part weights around{" "}
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              20mb.
            </span>
          </p>
          <p
            className="StartPage__Footer_additionalText"
            style={{ color: "#f35eff" }}
          >
            Watching on a PC is recommended.
          </p>
        </>
      )}
      {/* <p>First time visitors are advised to view the <span style={{color: '#f35eff', fontWeight: 'bold'}}>heavy</span>weight portfolio page first.</p> */}
      {/* <p>Hover over any of the options to read more about them.</p>
        <p>OR</p>
        <a className='StartPage__Footer_link' href=''>Just VIEW THE TOP 5 PROJECTS!</a> */}
    </div>
  );
};

export default Footer;
