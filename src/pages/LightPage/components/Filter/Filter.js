import React from "react";
import "./styles.scss";

const Filter = ({ currentState }) => {
  return (
    <div
      className={`filter ${
        currentState === 3
          ? "filter__night"
          : currentState === 1
          ? "filter__sunny"
          : currentState === 2
          ? "filter_inside"
          : ""
      }`}
    />
  );
};

export default Filter;
