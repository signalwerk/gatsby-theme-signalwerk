import React from 'react'
import './styles.css'

class Grid extends React.Component {
  render() {
    return (
      <div
        className={`Grid layout--wide ${
          this.props.background ? 'Grid--fill-default' : 'Grid--fill-no'
        }`}
      >
        <div className="Grid__inner">{this.props.children}</div>
      </div>
    )
  }
}

export default Grid
