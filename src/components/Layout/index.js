/* eslint-disable */
import React from "react";
import { Link } from "gatsby";
// import Navigation from './Navigation'

import "../App/css/fonts-var.css";
import "../App/css/fonts.css";
import "../Html/styles.css";
import "../Body/styles.css";
import "../Footnotes/styles.css";
import "../Hr/styles.css";

import "../Headings/styles.css";
import "../Blockquote/styles.css";
import "../List/styles.css";
import "../TOC/styles.css";
import "../Code/styles.css";
import "../Code/prism.css";
import "../P/styles.css";
import "../Table/styles.css";
import "../A/styles.css";
import "../Img/styles.css";
import "../Video/styles.css";

import "./style.css";

const Template = ({ isRoot, children }) => {
  let header;

  if (!isRoot) {
    header = (
      <h3 className="layout__home layout--wide">
        <Link to={"/"}>← Home</Link>
      </h3>
    );
  }
  return (
    <div className="layout__content">
      {header}
      {children}
    </div>
  );
};

export default Template;
