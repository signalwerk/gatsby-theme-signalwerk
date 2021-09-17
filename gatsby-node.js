const _ = require("lodash");
// const Promise = require('bluebird')
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
// const withThemePath = require("./with-theme-path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({
  graphql,
  useStaticQuery,
  actions: { createPage },
}) => {
  // const Post = require.resolve(`"./src/templates/Post`);
  const Post = require.resolve(`./src/templates/Post`);

  const postQuery = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              URI
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
  `);

  const posts = postQuery.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    const path = post.node.fields.URI;

    if (path !== "root") {
      createPage({
        path: path,
        component: Post,
        context: {
          slug: path,
        },
      });
    }
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    // add default (for filter)
    if (typeof node.frontmatter.draft === "undefined") {
      node.frontmatter.draft = false;
    }

    const slug = node.frontmatter.path;

    createNodeField({
      node,
      name: `URI`,
      value: slug,
    });
  }
};
