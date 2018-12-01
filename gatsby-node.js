const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const withThemePath = require('./with-theme-path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const Post = withThemePath('./src/templates/Post')

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create post pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: Post,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    // const fileNode = getNode(node.parent);
    // let slug = fileNode.fields.slug;
    // if (typeof node.frontmatter.path !== 'undefined') {
    //   slug = node.frontmatter.path;
    // }
    // createNodeField({
    //   node,
    //   name: 'slugNew',
    //   value: slug
    // });

    // add default (for filter)
    if (typeof node.frontmatter.draft === 'undefined') {
      node.frontmatter.draft = false
    }

    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.path || slug,
    })
  }
}
