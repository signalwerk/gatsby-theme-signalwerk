import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={`https://www.gravatar.com/avatar/545345c83f095bbc785578c37878d62e?s=200`}
          alt={`Stefan Huber`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p>
          Written by{" "}
          <strong>
            <a href={this.props.authorUrl}>{this.props.author}</a>
          </strong>
        </p>
      </div>
    )
  }
}

export default Bio
