import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Gallery from '../components/Gallery'
import { Section } from '../components/Block'

const Impressionen = ({ data }) => (
  <Layout>
    <PageHero bg="rose" color="green" title={['Impressionen']} />
    <Section>
      <Gallery
        photos={data.allImages.edges.sort(
          (a, b) => a.node.modifiedTime < b.node.modifiedTime
        )}
        videos={{
          'IMG_20181009_151421.jpg': 'https://youtu.be/vSA1n667zoo',
        }}
      />
    </Section>
  </Layout>
)

export default Impressionen

export const query = graphql`
  query impressionenQuery {
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
