import  React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Index from "gatsby-theme-signalwerk/src/pages";



class BlogIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Index {...this.props} />
      </React.Fragment>
    )
  }
}

export default BlogIndex

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorUrl
      }
    }
    post: mdx(fields: {slug: {eq: "root"}}) {
      id
      excerpt
      code {
        body
      }
      frontmatter {
        title
        author
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
      wordCount {
        words
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true }, hideInMenu: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
            tags
            description
          }
        }
      }
    }
  }
`
