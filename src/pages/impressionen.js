import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Gallery from '../components/Gallery'

import impressionen from '../images/impressionen.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={impressionen} />
    <Gallery photos={data.allImages.edges} />
  </Layout>
)

export const query = graphql`
  query impressionenQuery {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "jh_jungreithmayr_005.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allImages: allFile(
      filter: { absolutePath: { regex: "/impressionen/.*/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1280) {
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  }
`
