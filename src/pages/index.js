import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ImageSlider from '../components/ImageSlider'
import SectionTopics from '../components/sectiontopics'
import HeroText from '../components/HeroText'
import Zitat from '../components/Zitat'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} />
    <SectionTopics />
    <ImageSlider
      images={[
        data.sliderImage1.childImageSharp.sizes,
        data.sliderImage2.childImageSharp.sizes,
        data.sliderImage3.childImageSharp.sizes,
        data.sliderImage4.childImageSharp.sizes,
      ]}
    />
    <HeroText
      text={
        <span>
          MEHR ALS RAUM:
          <br />
          LEBENSRAUM
        </span>
      }
      subtext={
        <span>
          Mehr als ein Werkstoff.
          <br />
          Mehr als ein Möbel.
          <br /> Mehr als ein Haus.
        </span>
      }
    />
    <Zitat
      motto="Holz, Raum, Lebens-raum"
      image={data.joImage.childImageSharp.sizes}
      text1="HOLZ, SEE, STADT, THENING."
      subtext1="Den Duft von Holz habe ich hier schon als Kind erlebt. Den Duft des Hallstättersees als Jugendlicher in der Holz-HTL. Den Duft der Stadt beim Architekturstudium in Graz.Alles zusammen verschmilzt zu einem besonderen „Parfum“: Mehr als eine Tischlerei."
      text2="Joachim Jungreithmayr"
      subtext2="5. Generation"
    />
    <Hero sizes={data.hero2Image.childImageSharp.sizes} />
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
    hero2Image: file(relativePath: { eq: "jh_jungreithmayr_020.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage1: file(relativePath: { eq: "jh_jungreithmayr_081.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage2: file(relativePath: { eq: "jh_jungreithmayr_022.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage3: file(relativePath: { eq: "jh_jungreithmayr_023.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage4: file(relativePath: { eq: "jh_jungreithmayr_079.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    joImage: file(relativePath: { eq: "jh_jungreithmayr_096.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
