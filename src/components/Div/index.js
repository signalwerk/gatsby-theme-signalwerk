import React from 'react'

import './styles.css'

class Div extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} Div--root`}>
        {this.props.children}
      </div>
    )
  }
}

export default Div
