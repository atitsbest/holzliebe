import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Gallery from '../components/Gallery'
import VideoGallery from '../components/VideoGallery'

import impressionen from '../images/impressionen.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage} label={impressionen} />
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
        gatsbyImageData(width: 1280)
      }
    }
    video1PreviewImage: file(relativePath: { eq: "/impressionen/IMG_20181009_151421.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1280)
      }
    }
    allImages: allFile(
      filter: { absolutePath: { regex: "/impressionen/.*/" } }
    ) {
      edges {
        node {
          modifiedTime
          childImageSharp {
            gatsbyImageData(width: 1280)
          }
        }
      }
    }
  }
`
