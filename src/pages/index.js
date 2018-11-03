import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SectionTopics from '../components/sectiontopics'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} />
    <SectionTopics />
  </Layout>
)

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "jh_jungreithmayr_061.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
