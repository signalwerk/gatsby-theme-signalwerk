import React from 'react'

import './styles.css'


class Div extends React.Component {
  render() {


    return (
      <div className={`Div--root ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Div
