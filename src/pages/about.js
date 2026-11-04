import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import History from '../components/HistoryIntro'
import Team from '../components/TeamCards'
import { FullImage } from '../components/Block'

const About = ({ data }) => (
  <Layout>
    <PageHero bg="grey" color="lime" title={['Brillant ist', 'selten laut']} />
    <History />
    <FullImage image={data.kueche} />
    <Team />
  </Layout>
)

export default About

export const query = graphql`
  query aboutQuery {
    kueche: file(relativePath: { eq: "jung/kueche.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1620)
      }
    }
  }
`
