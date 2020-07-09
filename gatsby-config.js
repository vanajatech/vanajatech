module.exports = {
  siteMetadata: {
    title: `Vanaja Tech`,
    description: `Technology partnership with organisations that Form The Future.`,
    author: `@VanajaTech`,
    keywords: [
      `vanaja`,
      `technologies`,
      `software`,
      `development`,
      `jobs`,
      `careers`,
      `junior`,
      `senior`,
      `engineer`,
      `hämeenlinna`,
    ],
    siteUrl: `https://vanaja.tech`,
    shareImage: `/public/default-share-img.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vanaja-technologies`,
        short_name: `vanajatech`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b40a0a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `open-positions`,
        path: `${__dirname}/src/open-positions/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `500`, `600`, `700`],
          },
          {
            family: `IBM Plex Mono`,
            variants: [`600`],
          },
        ],
      },
    },
  ],
}
