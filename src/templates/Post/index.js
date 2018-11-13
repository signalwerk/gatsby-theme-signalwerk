import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../../components/Bio'
import Meta from '../../components/Meta'
import Layout from '../../components/layout'
import { rhythm, scale } from '../../utils/typography'




class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteAuthor = get(this.props, 'data.site.siteMetadata.author')
    const siteAuthorUrl = get(this.props, 'data.site.siteMetadata.authorUrl')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext





    // const tags = post.fields.tagSlugs;

    // const tagsBlock = (
    //   <ul className="post-single__tags-list">
    //     {tags.map((tag, i) => (
    //       <li className="post-single__tags-list-item" key={tag}>
    //         <Link to={tag} className="post-single__tags-list-item-link">
    //           {post.frontmatter.tags[i]}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // );
    //




    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>

        <div className="post-single__meta">
          <small>

            <Meta
              words={post.wordCount.words}
              author={post.frontmatter.author}
              date={post.frontmatter.date}
              />

          </small>
        </div>


        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      {/*        <Bio
          author={`${post.frontmatter.author || siteAuthor}`}
          authorUrl={`${post.frontmatter.authorUrl || siteAuthorUrl}`}
        />*/}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
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
        author
        authorUrl
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
