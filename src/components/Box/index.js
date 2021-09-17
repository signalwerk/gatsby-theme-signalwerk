import React from "react";
import "./styles.css";

const Box = ({
  children,
  maxWidth,
  background,
  backgroundColor,
  line,
  ratio,
  className,
}) => (
  <div
    className={`Box ${maxWidth ? `Box--maxWidth-${maxWidth}` : ""} ${
      backgroundColor
        ? `Box--bgColor-${backgroundColor}`
        : "Box--bgColor-default"
    } ${line ? "Box--line-default" : "Box--noline"} ${
      background ? "Box--fill-default" : "Box--fill-no"
    } ${
      ratio ? `Box--ratio Box--ratio-${ratio.replace(":", "-")}` : ""
    } ${className}`}
  >
    <div className="Box__wrapper">
      <div className="Box__inner">{children}</div>
    </div>
  </div>
);

export default Box;
