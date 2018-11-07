module.exports = {
  pathPrefix: `/blog`,

  __experimentalThemes: [
    [
      "gatsby-theme-signalwerk",
      {
        root: __dirname,
      }
    ]
  ],

  siteMetadata: {
    title: 'Blog',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
  },
};
