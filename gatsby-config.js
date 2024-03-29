const path = require("path");

module.exports = ({ root }) => ({
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-reference-footnotes`,
            options: {},
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Inhaltsverzeichnis|Table of Contents",
              tight: false,
              fromHeading: 2,
              toHeading: 6,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1800,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1800,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          "gatsby-remark-prismjs",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
});
