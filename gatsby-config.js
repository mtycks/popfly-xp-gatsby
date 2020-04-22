require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `PopFlyXP`,
    description: `Digital Brand Development Platform for Baseball Players.`,
    author: `@popflyxp`,
    siteUrl: `https://popflyxp.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby`,
        short_name: `gatsby`,
        start_url: `/`,
        background_color: `#F46912`,
        theme_color: `#FCB826`,
        display: `minimal-ui`,
        icon: `src/images/faviconpop.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `editpopflyxp.ememdigital.com`,
        protocol: `http`, 
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        // auth: {
        //   htaccess_user: process.env.WP_USER,
        //   htaccess_pass: process.env.WP_PASS,
        //   htaccess_sendImmediately: false,
        // },
        excludedRoutes: []
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `days one`,
          `open sans`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "",
        head: false // Optional
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164288459-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "popflyxp.com",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
