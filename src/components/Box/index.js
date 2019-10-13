import React from 'react'
import './styles.css'

class Box extends React.Component {
  render() {
    return (
      <div
        className={`Box ${
          this.props.background ? 'Box--fill-default' : 'Box--fill-no'
        } ${
          this.props.ratio
            ? `Box--ratio Box--ratio-${this.props.ratio.replace(':', '-')}`
            : ''
        }`}
      >
        <div className="Box__wrapper">
          <div className="Box__inner">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Box
