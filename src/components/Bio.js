import React from 'react'


class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={`https://www.gravatar.com/avatar/545345c83f095bbc785578c37878d62e?s=200`}
          alt={`Stefan Huber`}
        />
        <p>
          Written by{' '}
          <strong>
            <a href={this.props.authorUrl}>{this.props.author}</a>
          </strong>
        </p>
      </div>
    )
  }
}

export default Bio
