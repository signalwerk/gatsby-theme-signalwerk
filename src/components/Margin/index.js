import React from 'react'
import './styles.css'

class Margin extends React.Component {
  render() {
    return (
      <div className="Margin--root">
        <div className="Margin--inner">{this.props.children}</div>
      </div>
    )
  }
}

export default Margin
