/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'
// import Navigation from './Navigation'

import './App/css/fonts-var.css'
import './App/css/fonts.css'
import './Html/styles.css'
import './Body/styles.css'
import './Footnotes/styles.css'
import './Hr/styles.css'

import './style.css'

import './Headings/styles.css'
import './Blockquote/styles.css'
import './List/styles.css'
import './TOC/styles.css'
import './Code/styles.css'
import './Code/prism.css'
import './P/styles.css'
import './Table/styles.css'
import './A/styles.css'
import './Img/styles.css'
import './Video/styles.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname !== rootPath) {
      header = (
        <h3 className="layout__home layout--wide">
          <Link to={'/'}>← Home</Link>
        </h3>
      )
      // header = Navigation
    }
    return (
      <div className="layout__content">
        {header}
        {children}
      </div>
    )
  }
}

export default Template
