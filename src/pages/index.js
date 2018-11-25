import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Meta from '../components/Meta'
import Layout from '../components/layout'
import './styles.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {/*        <Bio
            author={`${siteAuthor}`}
            authorUrl={`${siteAuthorUrl}`}
          />*/}
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || '--no title--'
          return (
            <div className="Index--item" key={node.fields.slug}>


              <h2 className="Index--title">
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <div className="Index--meta">
                  <Meta
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                  />
              </div>
              {(node.frontmatter.description && (
                <p>{node.frontmatter.description}</p>
              )) || <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
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
          }
        }
      }
    }
  }
`
