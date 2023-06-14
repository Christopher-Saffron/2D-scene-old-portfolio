import React from "react";

const InteractiveLamp = ({}) => {
  return (
    <div
      className="interactive__lamp "
      onClick={(e) => {
        e.target.classList.toggle("interactive__lamp_enabled");
      }}
    >
      <div className="light" />
    </div>
  );
};

export default InteractiveLamp;
