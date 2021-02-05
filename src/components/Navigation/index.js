import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({ demo }) => (
  <div className="Navigation">
    <h3 className="layout__home layout--wide">
      <Link to={'/'}>← Home</Link>
    </h3>
  </div>
)

export default Navigation
