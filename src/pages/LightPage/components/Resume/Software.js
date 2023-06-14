import React from "react";

function Software() {
  return (
    <div className="resume__software">
      <div className="resume__category">
        <img className="resume__category_icon" src="./skills.svg" alt="" />
        Software
      </div>
      <div className="resume__skillBars_Holder">
        <div className="resume__skill">
          <span className="resume__skillName">Blender</span>
          <div className="resume__skillBar">
            <div className="resume__skillBar_inside" style={{ width: "76%" }} />
          </div>
        </div>
        <div className="resume__skill">
          <span className="resume__skillName">Sony Vegas</span>
          <div className="resume__skillBar">
            <div className="resume__skillBar_inside" style={{ width: "69%" }} />
          </div>
        </div>
        <div className="resume__skill">
          <span className="resume__skillName">Davinci Resolve</span>
          <div className="resume__skillBar">
            <div className="resume__skillBar_inside" style={{ width: "45%" }} />
          </div>
        </div>
        <div className="resume__skill">
          <span className="resume__skillName">Gimp</span>
          <div className="resume__skillBar">
            <div className="resume__skillBar_inside" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="resume__skill">
          <span className="resume__skillName">Excel</span>
          <div className="resume__skillBar">
            <div className="resume__skillBar_inside" style={{ width: "20%" }} />
          </div>
        </div>
        <div className="resume__skill">
          <span className="resume__skillName">Unity &#40;vrchatSDK&#41;</span>
          <div className="resume__skillBar">
            <div className="resume__skillBar_inside" style={{ width: "65%" }} />
          </div>
        </div>
        <div className="resume__skill">
          <span className="resume__skillName">Googling</span>
          <div className="resume__skillBar">
            <div
              className="resume__skillBar_inside"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;
