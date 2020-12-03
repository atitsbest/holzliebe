import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Gallery from '../components/Gallery'
import VideoGallery from '../components/VideoGallery'

import impressionen from '../images/impressionen.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={impressionen} />
    <Gallery
      photos={data.allImages.edges.sort(
        (a, b) => a.node.modifiedTime < b.node.modifiedTime
      )}
    videos={{
      "IMG_20181009_151421.jpg": "https://youtu.be/vSA1n667zoo"
    }}
    />
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
    video1PreviewImage: file(relativePath: { eq: "/impressionen/IMG_20181009_151421.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          src
          srcSet
          sizes
          aspectRatio
        }
      }
    }
    allImages: allFile(
      filter: { absolutePath: { regex: "/impressionen/.*/" } }
    ) {
      edges {
        node {
          modifiedTime
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
