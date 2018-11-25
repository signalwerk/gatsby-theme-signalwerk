import React from 'react'

import './styles.css'


// https://help.medium.com/hc/en-us/articles/214991667-Read-time
// http://iovs.arvojournals.org/article.aspx?articleid=2166061
// german: words: 179, Characters: 920
const avgWPM = 179

const printDate = str => {
  const parsedDate = new Date(Date.parse(str))
  const date = parsedDate.toLocaleDateString('de-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return date
}

class Meta extends React.Component {
  render() {
    const { author, date, words } = this.props

    const timeToRead = Math.round((words || 1) / avgWPM) || 1

    return (
      <div className="Meta--root">
        {words && (
          <span className="Meta--timeToRead">
            ~{timeToRead}
            &nbsp;min
            <span className="Meta--dot"> · </span>
          </span>
        )}
        {author}
        <span className="Meta--dot"> · </span>
        {printDate(date).replace(/ /g, '\u00a0')}
      </div>
    )
  }
}

export default Meta
