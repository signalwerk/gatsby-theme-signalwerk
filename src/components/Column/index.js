import React from "react";
import "./styles.css";

const Column = ({ children, start, end, className }) => (
  <div
    className={`Column ${start ? `Column--start-${start}` : ""} ${
      end ? `Column--end-${end}` : ""
    } ${className}`}
  >
    <div className="Column--inner">{children}</div>
  </div>
);

export default Column;
