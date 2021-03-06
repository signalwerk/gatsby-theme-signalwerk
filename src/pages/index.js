import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Meta from '../components/Meta'
import Layout from '../components/layout'
import './styles.css'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.posts.edges')
    const post = get(this, 'props.data.post')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'de' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {post && (
          <React.Fragment>
            <h1>{post.frontmatter.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <MDXProvider components={{}}>
              <MDXRenderer>
                {post.body}
              </MDXRenderer>
            </MDXProvider>
          </React.Fragment>
        )}

        {posts &&
          posts.map(({ node }) => {
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
                  <p className="Index--description">{node.frontmatter.description}</p>
                )) || <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />}
              </div>
            )
          })}
      </Layout>
    )
  }
}

export default Index

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
    post: mdx(fields: {slug: {eq: "root"}}) {
      id
      excerpt
      body
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
    posts: allMdx(
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
          }
        }
      }
    }
  }
`
