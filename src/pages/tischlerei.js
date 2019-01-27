import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TopicHeader from '../components/topicheader'
import History from '../components/History'
import Zitat from '../components/Zitat'
import BulletPoint from '../components/BulletPoint'
import { TischleierIcon } from '../components/icons'
import { Grid, Half } from '../components/Grid'
import besonders from '../images/besonders.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={besonders} />
    <TopicHeader
      icon={TischleierIcon}
      title="Qualitätstischlerei"
      text="Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Welche Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für Sie diese Fragen zu lösen."
    />
    <Grid>
      <Half>
        <Img
          sizes={{
            ...data.halfHeroImage.childImageSharp.sizes,
            aspectRatio: 21 / 11,
          }}
        />
      </Half>
      <Half>
        <Img
          sizes={{
            ...data.halfHero2Image.childImageSharp.sizes,
            aspectRatio: 21 / 11,
          }}
        />
      </Half>
    </Grid>
    <Zitat
      motto="Baum, Holz, Werkstück Möbel"
      image={data.hobel.childImageSharp.sizes}
      text1="ULLECABO RRUMQUI CUS AD QUE VERUMQUIAE EA"
      subtext1="Die meisten Menschen erkennen die Qualität eines Möbels an seiner großartigen Ausstrahlung, obwohl sie die nicht benennen können. Deshalb haben unsere Tischlermeister nicht einfach handwerkliches Geschick. Sondern sie wissen, wie man die Ausstrahlung von Holz zur Entfaltung bringt. Mit Wissen, Können UND Spüren"
      text2="Joachim Jungreithmayr"
      subtext2="Geschäftsführer"
    />
    <Hero
      sizes={{ ...data.hero2Image.childImageSharp.sizes, aspectRatio: 16 / 9 }}
    />
    <BulletPoint
      odd
      motto="Darauf sind wir stolz"
      number="01"
      title="Maserungstreue"
      text="Sie macht aus einer Holzfront eine stolze Holzfront. Wir suchen Holzrohlinge persönlich aus und fügen sie zu einem schönen Bild zusammen. So „malen“ Tischler."
      image={{ ...data.bullet1.childImageSharp.sizes, aspectRatio: 1 }}
    />
    <BulletPoint
      number="02"
      title="Funktionsdetails"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raf- finierte Innovationen und architektonisches Gespür machen es möglich.Wenn es keine gute Lösung gibt am Markt, dann erfinden wir eine. Dennoch sind wir keine „Erfinder“. Das österreichische Wort dafür ist „Tüftler“. Bei Lösungen im Detail sind wir „Holz-Tüftler“"
      image={{ ...data.bullet2.childImageSharp.sizes, aspectRatio: 1 }}
    />
    <BulletPoint
      odd
      number="03"
      title="Pure Qualität"
      text="Pures Wasser ist kristallklar. Purer Fruchtsaft intensiv und unverfälscht. Pures Design geradlinig und dem Auge wohltuend, oft überraschend einfach. Pure Qualität ist alles zusammen: klar, intensiv, unverfälscht und wohltuend."
      image={{ ...data.bullet3.childImageSharp.sizes, aspectRatio: 1 }}
    />
    <BulletPoint
      number="04"
      title="Koordination"
      text="Das Zusammenspiel von allen nötigen Gewerken, wie Schlosser, Glaserer, Fliesenleger, Elektriker, auch Künstler und Baumeister und vieles mehr gehört geplant und organisiert. Auch das ist Qualität."
      image={{ ...data.bullet4.childImageSharp.sizes, aspectRatio: 1 }}
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
    hero2Image: file(relativePath: { eq: "jh_jungreithmayr_138.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    halfHeroImage: file(relativePath: { eq: "jh_jungreithmayr_146.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    halfHero2Image: file(relativePath: { eq: "jh_jungreithmayr_161.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    hobel: file(relativePath: { eq: "hobel.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet1: file(relativePath: { eq: "stolz.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet2: file(relativePath: { eq: "stolz2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet3: file(relativePath: { eq: "stolz3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet4: file(relativePath: { eq: "stolz4.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
