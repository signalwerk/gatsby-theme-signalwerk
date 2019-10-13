import React from 'react'
import './styles.css'

class Column extends React.Component {
  render() {
    return (
      <div
        className={`Column ${
          this.props.start ? `Column--start-${this.props.start}` : ''
        }
        ${this.props.end ? `Column--end-${this.props.end}` : ''}`}
      >
        <div className="Column--inner">{this.props.children}</div>
      </div>
    )
  }
}

export default Column
