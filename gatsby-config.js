module.exports = {
  pathPrefix: '/2019',
  siteMetadata: {
    title: 'Jungreithmayr',
    description:
      'Tischlerei - Massivholzhaus - Architektur - OÖ Linz Land Thening - Jungreithmayr. tischlereiarchitektur.at. MEHR ALS RAUM: LEBENSRAUM - Raumplanung, Qualitätstischlerei, Holzarchitektur',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    //'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-96JYGXTDLN'],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
}
