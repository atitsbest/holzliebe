import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Hero from '../components/hero'
import TopicHeader from '../components/topicheader'
import Layout from '../components/layout'
import CallToAction from '../components/CallToAction'
import LabeledImage from '../components/LabeledImage'
import { RaumplanungIcon, HolzarchitekturIcon } from '../components/icons'
import originell from '../images/originell.png'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const NotFoundPage = ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={originell} />
    <TopicHeader
      icon={RaumplanungIcon}
      title="Raumplanung"
      text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung ist mehr, als ein Möbel ins Eck zu stellen. "
    />
    <ImageGrid>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{
              ...data.schlafen.childImageSharp.sizes,
              aspectRatio: 4 / 3,
            }}
            label="Schlafen."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{ ...data.wohnen.childImageSharp.sizes, aspectRatio: 4 / 3 }}
            label="Wohnen."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{ ...data.kochen.childImageSharp.sizes, aspectRatio: 4 / 3 }}
            label="Kochen."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{ ...data.buero.childImageSharp.sizes, aspectRatio: 4 / 3 }}
            label="Büro."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{
              ...data.badezimmer.childImageSharp.sizes,
              aspectRatio: 4 / 3,
            }}
            label="Badezimmer."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{
              ...data.garderobe.childImageSharp.sizes,
              aspectRatio: 4 / 3,
            }}
            label="Garderobe."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{
              ...data.freiraum.childImageSharp.sizes,
              aspectRatio: 4 / 3,
            }}
            label="Freiraum."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{ ...data.sauna.childImageSharp.sizes, aspectRatio: 4 / 3 }}
            label="Sauna."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
      <Frame>
        <Link to="/impressionen">
          <LabeledImage
            image={{
              ...data.accessoires.childImageSharp.sizes,
              aspectRatio: 4 / 3,
            }}
            label="Accessoires."
            text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung."
          />
        </Link>
      </Frame>
    </ImageGrid>
    <Hero sizes={data.hero2Image.childImageSharp.sizes} />
    <TopicHeader
      title="Raumplanung"
      text="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung ist mehr, als ein Möbel ins Eck zu stellen. "
    />
    <CallToAction title="Kontakt" icon={HolzarchitekturIcon} />
    <Hero sizes={data.hero3Image.childImageSharp.sizes} />
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
    hero2Image: file(relativePath: { eq: "raumplanung_plan.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    hero3Image: file(relativePath: { eq: "jh_jungreithmayr_126.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    schlafen: file(relativePath: { eq: "jh_jungreithmayr_081.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    wohnen: file(relativePath: { eq: "jh_jungreithmayr_122.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    kochen: file(relativePath: { eq: "jh_jungreithmayr_085.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    buero: file(relativePath: { eq: "jh_jungreithmayr_079.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    badezimmer: file(relativePath: { eq: "jh_jungreithmayr_072.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    garderobe: file(relativePath: { eq: "raumplanung_plan.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    freiraum: file(relativePath: { eq: "jh_jungreithmayr_008.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sauna: file(relativePath: { eq: "raumplanung_plan.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    accessoires: file(relativePath: { eq: "jh_jungreithmayr_048.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.25rem;
`

const Frame = styled.div`
  flex: 1 0 33.33%;
  max-width: 33.33%;
  padding: 0 0.25rem ${Typography.rhythm(1)} 0.25rem;

  a {
    text-decoration: none;
  }

  ${media.tablet`
    flex: 1 0 50%;
    max-width: 50%;
  `};

  ${media.mobile`
    flex: 1 0 100%;
    max-width: 100%;
  `};
`
