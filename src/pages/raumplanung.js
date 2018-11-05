import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import TopicHeader from '../components/topicheader'
import Layout from '../components/layout'
import CallToAction from '../components/CallToAction'
import { RaumplanungIcon, HolzarchitekturIcon } from '../components/icons'

const NotFoundPage = ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} />
    <TopicHeader
      icon={RaumplanungIcon}
      title="Raumplanung"
      text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung ist mehr, als ein Möbel ins Eck zu stellen. "
    />
    <CallToAction title="Kontakt" icon={HolzarchitekturIcon} />
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query raumplanungQuery {
    heroImage: file(relativePath: { eq: "jh_jungreithmayr_originell.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
