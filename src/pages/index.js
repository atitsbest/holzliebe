import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Typography from '../utils/typography'
import { media } from '../utils/style'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ImageSlider from '../components/ImageSlider'
import SectionTopics from '../components/sectiontopics'
import HeroText from '../components/HeroText'
import Zitat from '../components/Zitat'
import CallToAction from '../components/CallToAction'
import Wisdom from '../components/Wisdom'
import Team from '../components/Team'
import History from '../components/History'
import { HolzarchitekturIcon } from '../components/icons'
import LabeledImage from '../components/LabeledImage'
import BackgroundImage from '../components/BackgroundImage'

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
    <Grid>
      <Half>
        <LabeledImage
          image={data.raumplanung.childImageSharp.sizes}
          label="Raumplanung"
        />
      </Half>
      <Quarter>
        <BackgroundImage sizes={data.raumplanung.childImageSharp.sizes} />
      </Quarter>
      <Quarter>
        <BackgroundImage sizes={data.raumplanung.childImageSharp.sizes} />
      </Quarter>
      <Half>
        <LabeledImage
          image={data.tischlerei.childImageSharp.sizes}
          label="Tischlerei"
        />
      </Half>
      <Half>
        <BackgroundImage
          sizes={data.raumplanung.childImageSharp.sizes}
          style={{ height: '300px' }}
        />
      </Half>
      <Half>
        <LabeledImage
          image={data.architektur.childImageSharp.sizes}
          label="Architektur"
        />
      </Half>
      <Quarter>
        <BackgroundImage sizes={data.raumplanung.childImageSharp.sizes} />
      </Quarter>
      <Quarter>
        <BackgroundImage sizes={data.raumplanung.childImageSharp.sizes} />
      </Quarter>
    </Grid>
    <Zitat
      motto="Holz, Raum, Lebens-raum"
      image={data.joImage.childImageSharp.sizes}
      text1="HOLZ, SEE, STADT, THENING."
      subtext1="Den Duft von Holz habe ich hier schon als Kind erlebt. Den Duft des Hallstättersees als Jugendlicher in der Holz-HTL. Den Duft der Stadt beim Architekturstudium in Graz.Alles zusammen verschmilzt zu einem besonderen „Parfum“: Mehr als eine Tischlerei."
      text2="Joachim Jungreithmayr"
      subtext2="5. Generation"
    />
    <Hero sizes={data.hero2Image.childImageSharp.sizes} />
    <CallToAction title="Kontakt" icon={HolzarchitekturIcon} />
    <Wisdom
      backgroundImage={data.kirschblueten.childImageSharp.sizes}
      author="Joachim Jungreithmayr"
    />
    <Team />
    <History />
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
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    hero2Image: file(relativePath: { eq: "jh_jungreithmayr_020.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage1: file(relativePath: { eq: "jh_jungreithmayr_081.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage2: file(relativePath: { eq: "jh_jungreithmayr_022.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage3: file(relativePath: { eq: "jh_jungreithmayr_023.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage4: file(relativePath: { eq: "jh_jungreithmayr_079.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    joImage: file(relativePath: { eq: "jh_jungreithmayr_096.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    kirschblueten: file(relativePath: { eq: "kirschblueten.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    history: file(relativePath: { eq: "history.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    raumplanung: file(relativePath: { eq: "jh_jungreithmayr_020.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    tischlerei: file(relativePath: { eq: "jh_jungreithmayr_146.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    architektur: file(relativePath: { eq: "jh_jungreithmayr_004.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem -0.25rem ${Typography.rhythm(0.125)};
`

const Half = styled.div`
  flex: 0 1 calc(50% - 0.5rem);
  margin: 0.25rem;

  ${media.mobile`
    flex: 0 1 calc(100% - .5rem);
  `};
`

const Quarter = styled.div`
  flex: 0 1 calc(25% - 0.5rem);
  margin: 0.25rem;

  ${media.mobile`
    flex: 0 1 calc(50% - .5rem);
  `};
`
