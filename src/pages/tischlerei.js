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
      motto="Holz Tischleri Text Lorem"
      image={data.hobel.childImageSharp.sizes}
      text1="ULLECABO RRUMQUI CUS AD QUE VERUMQUIAE EA"
      subtext1="dolut por aborem accum que net, et audam vent venist, cusam etur sitas mo etur, cullabor magnis re laut et optatur sequam, sedis aspidit et fuga. Musam, con nobis et ea nis- simaiorum hilles molestisitae excest aliquid uciisquis dolup- tur!"
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
      title="Holzarchitektur"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raf- finierte Innovationen und architektonisches Gespür machen es möglich."
    />
    <BulletPoint
      number="02"
      title="Holzarchitektur"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raf- finierte Innovationen und architektonisches Gespür machen es möglich."
    />
    <BulletPoint
      odd
      number="04"
      title="Holzarchitektur"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raf- finierte Innovationen und architektonisches Gespür machen es möglich."
    />
    <BulletPoint
      number="03"
      title="Holzarchitektur"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raf- finierte Innovationen und architektonisches Gespür machen es möglich."
    />
    <BulletPoint
      odd
      number="05"
      title="Holzarchitektur"
      text="Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raf- finierte Innovationen und architektonisches Gespür machen es möglich."
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
    halfHero2Image: file(relativePath: { eq: "jh_jungreithmayr_181.jpg" }) {
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
  }
`
