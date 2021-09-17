import React from "react";
import "./styles.css";

const Grid = ({ children, background, className }) => (
  <div
    className={`Grid layout--wide ${
      background ? "Grid--fill-default" : "Grid--fill-no"
    } ${className}`}
  >
    <div className="Grid__inner">{children}</div>
  </div>
);

export default Grid;
