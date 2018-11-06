import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TopicHeader from '../components/topicheader'
import { HolzarchitekturIcon } from '../components/icons'
import hochwertig from '../images/hochwertig.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={hochwertig} />
    <TopicHeader
      icon={HolzarchitekturIcon}
      title="Holzarchitektur"
      text="Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Wel- che Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für Sie diese Fragen zu lösen."
    />
  </Layout>
)

export const query = graphql`
  query architekturQuery {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "jh_jungreithmayr_004.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
