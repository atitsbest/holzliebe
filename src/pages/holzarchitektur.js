import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TopicHeader from '../components/topicheader'
import { HolzarchitekturIcon } from '../components/icons'
import BulletPoint from '../components/BulletPoint'
import CallToAction from '../components/CallToAction'

import { Grid, Half } from '../components/Grid'

import hochwertig from '../images/hochwertig.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={hochwertig} />
    <TopicHeader
      icon={HolzarchitekturIcon}
      title="Holzarchitektur"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raffinierte Innovationen und architektonisches Gespür machen es möglich."
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

    <Hero
      sizes={{ ...data.hero2Image.childImageSharp.sizes, aspectRatio: 16 / 9 }}
    />
    <CallToAction
      title="Besichtigen"
      icon={HolzarchitekturIcon}
      url="/impressionen"
      text={[
        'Fotos sind gut.',
        'Die Qualität von Holzarchitektur kann man aber nur im Raum erspüren.',
        'Deshalb laden wir Sie herzlich zu einem persönlichen Besuch zu uns nach Thening ein.',
        'Warnung: Das wird Sie begeistern!',
        'Terminvereinbarung bitte per E-Mail, oder bei Joachim Jungreithmayr unter 07221 63016',
      ]}
    />
    <Grid>
      <Half>
        <Img
          sizes={{
            ...data.halfHero3Image.childImageSharp.sizes,
            aspectRatio: 21 / 11,
          }}
        />
      </Half>
      <Half>
        <Img
          sizes={{
            ...data.halfHero4Image.childImageSharp.sizes,
            aspectRatio: 21 / 11,
          }}
        />
      </Half>
    </Grid>
    <BulletPoint
      odd
      motto={['Massiv', 'Holz', 'Architektur']}
      number="01"
      image={{ ...data.bullet1.childImageSharp.sizes, aspectRatio: 1 }}
      title="Pures Holz"
      text="Eine Wand aus Holz: Höchste Stabilität, perfekte Dämmwerte, elegante Konstruktion. Unsere Planungen reizen die enormen Werkstoffvorteile aus und ermöglichen eine unvergleichliche konstruktive Befreitheit: Keine Kältebrücken, dadurch schlankes Architekturdesign, extrem hohe Belastbarkeit, hohe Spannweiten und Auskragungen möglich."
    />
    <BulletPoint
      image={{ ...data.bullet2.childImageSharp.sizes, aspectRatio: 1 }}
      number="02"
      title="Wohlfühlatmosphäre"
      text="„Ich habe mir nicht gedacht, dass so viel Holz so schön ist“, ist der häufigste Satz, den wir von BesucherInnen hören. Bei elegantem Design ist die Atmosphäre im Holzhaus freundlich, beruhigend, wohltuend und nachweislich gesund. Dennoch kann jede Wand gemalt oder verkleidet werden. Ganz nach Geschmack."
    />
    <BulletPoint
      odd
      image={{ ...data.bullet3.childImageSharp.sizes, aspectRatio: 1 }}
      number="03"
      title="Leichte Bearbeitbarkeit"
      text="Alle Leitungen können unaufwändig eingefräst werden, sie sind nachträglich einfach veränder- und erweiterbar, Bohren und Schrauben ohne Mauerdübel vereinfacht alle Montagen."
    />
    <BulletPoint
      image={{ ...data.bullet4.childImageSharp.sizes, aspectRatio: 1 }}
      number="04"
      title="Silber und Gold"
      text="Die Holzwände können auch außenseitig ganz pur und unbehandelt bleiben. Denn die Natur sorgt mit dem silbrigen Verwitterungsprozess an der Oberfläche für eine natürliche Schutzschicht, sodass das Regenwasser nie tiefer in die Wand eindringen kann. So sorgt der natürliche Werkstoff selbst für eine perfekte Lösung."
    />
    <br />
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
    hero2Image: file(relativePath: { eq: "jh_jungreithmayr_008.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    halfHeroImage: file(relativePath: { eq: "jh_jungreithmayr_007.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    halfHero2Image: file(relativePath: { eq: "jh_jungreithmayr_005.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    halfHero3Image: file(relativePath: { eq: "bauen_001.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    halfHero4Image: file(relativePath: { eq: "bauen_003.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet1: file(relativePath: { eq: "jh_jungreithmayr_115.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet2: file(relativePath: { eq: "jh_jungreithmayr_077.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet3: file(relativePath: { eq: "jh_jungreithmayr_072.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet4: file(relativePath: { eq: "jh_jungreithmayr_082.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    bullet5: file(relativePath: { eq: "bauen_002.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
