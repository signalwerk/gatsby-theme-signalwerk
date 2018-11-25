/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'

import './App/css/fonts-var.css'
import './App/css/fonts.css'
import './Html/styles.css'
import './Headings/styles.css'
import './P/styles.css'
import './A/styles.css'
import './Img/styles.css'

import './style.css'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
        Blog
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>← Home</Link>
        </h3>
      )
    }
    return (
      <div className="layout--content">
        {header}
        {children}
      </div>
    )
  }
}

export default Template
