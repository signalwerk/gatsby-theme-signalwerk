import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Meta from '../../components/Meta'
import Layout from '../../components/layout'

import './styles.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <div className="post-single__meta">
          <Meta
            words={post.wordCount.words}
            author={post.frontmatter.author}
            date={post.frontmatter.date}
          />
        </div>
        <h1>{post.frontmatter.title}</h1>

        {post.frontmatter.description && (
          <h2 className="post-single__lead">{post.frontmatter.description}</h2>
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        {/* <Bio
          author={`${post.frontmatter.author || siteAuthor}`}
          authorUrl={`${post.frontmatter.authorUrl || siteAuthorUrl}`}
        />*/}
        <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
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
  }
`
