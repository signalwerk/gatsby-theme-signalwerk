import React from "react";
import "./styles.css";

const Margin = ({ children, background, className }) => (
  <div
    className={`Margin ${
      background ? "Margin--fill-default" : "Margin--fill-no"
    } ${className}`}
  >
    <div className="Margin__inner">{children}</div>
  </div>
);

export default Margin;
