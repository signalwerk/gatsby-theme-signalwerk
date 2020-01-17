import React from 'react'
import './styles.css'

class Box extends React.Component {
  render() {
    return (
      <div
        className={`Box ${
          this.props.maxWidth ? `Box--maxWidth-${this.props.maxWidth}` : ''
        } ${
          this.props.backgroundColor
            ? `Box--bgColor-${this.props.backgroundColor}`
            : 'Box--bgColor-default'
        } ${this.props.line ? 'Box--line-default' : 'Box--noline'} ${
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
