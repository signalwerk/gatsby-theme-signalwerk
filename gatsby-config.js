const path = require('path')

module.exports = ({ root }) => ({
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              skip: "Inhaltsverzeichnis|Table of Contents",
              tight: false,
              fromHeading: 2,
              toHeading: 6
            },
          },
          `gatsby-remark-slug`,
          // {
          //   // Standard plugin with options example
          //   resolve: require.resolve(`./src/plugins/gatsby-remark-table-of-contents/`),
          // },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: 'inline',
              footnoteBackRefDisplay: 'inline',
              footnoteBackRefInnerText: '^', // Defaults to: "↩"
              //use if you want the Wikipedia style ^ link without an underline beneath it
              // footnoteBackRefAnchorStyle: `text-decoration: none;`,
              //use "front" for Wikipedia style ^ links
              footnoteBackRefInnerTextStartPosition: 'front',
              useFootnoteMarkerText: true, // Defaults to false
            },
          },
          // {
          //   resolve: 'gatsby-remark-numbered-footnotes',
          // },
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
          // {
          //   resolve: 'gatsby-remark-table-of-contents',
          // },


        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
})
