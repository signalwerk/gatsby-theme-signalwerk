import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider, MDXTag } from '@mdx-js/tag'

import get from 'lodash/get'

import Meta from '../../components/Meta'
import Layout from '../../components/layout'
import Gallery from '../../components/Gallery'
import Div from '../../components/Div'
import Margin from '../../components/Margin'

import './styles.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
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
          <div className="column__text">
            <h2 className="post-single__lead">
              {post.frontmatter.description}
            </h2>
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <MDXProvider components={{}}>
          <MDXRenderer scope={{ React, MDXTag, Gallery, Div, Margin }}>
            {post.code.body}
          </MDXRenderer>
        </MDXProvider>
        <br />
        <br />
        <br />

{/*
        <hr />
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
*/}
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
    post: mdx(fields: { slug: { eq: $slug } }) {
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
  }
`
