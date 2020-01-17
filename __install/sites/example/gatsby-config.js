module.exports = {
  // pathPrefix: `/blog`,
  pathPrefix: `/`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Blog',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
    description: 'A starter blog ...',
    siteUrl: "https://signalwerk.github.io/test"
  },
};
