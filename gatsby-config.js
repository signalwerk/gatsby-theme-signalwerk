const path = require('path')

module.exports = ({ root }) => ({
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-reference-footnotes`,
            options: {},
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Inhaltsverzeichnis|Table of Contents',
              tight: false,
              fromHeading: 2,
              toHeading: 6,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
})
