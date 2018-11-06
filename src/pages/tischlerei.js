import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TopicHeader from '../components/topicheader'
import History from '../components/History'
import { TischleierIcon } from '../components/icons'
import besonders from '../images/besonders.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={besonders} />
    <TopicHeader
      icon={TischleierIcon}
      title="Qualitätstischlerei"
      text="Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Wel- che Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für Sie diese Fragen zu lösen."
    />
    <History />
  </Layout>
)

export const query = graphql`
  query tischlereiQuery {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "jh_jungreithmayr_160.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
