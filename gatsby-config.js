require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Hat Shop`,
    description: `Project to learn Gatsby + Shopify`,
    author: `@evaolesa`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.GATSBY_ACCESS_TOKEN,
        storeUrl: process.env.GATSBY_MYSHOPIFY_URL,
        shopifyConnections: ["collections"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
