import React from "react";

const TopUi = ({ toggleQuickPreview }) => {
  return (
    <button
      onClick={() => {
        toggleQuickPreview(true);
      }}
      className="StartComponent__TopUi"
    >
      SHOW ONLY THE PROJECTS
    </button>
  );
};

export default TopUi;
