import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ImageSlider from '../components/ImageSlider'
import SectionTopics from '../components/sectiontopics'
import HeroText from '../components/HeroText'
import Zitat from '../components/Zitat'
import CallToAction from '../components/CallToAction'
import Wisdom from '../components/Wisdom'
import Team from '../components/Team'
import Article from '../components/Article'
import { HolzarchitekturIcon } from '../components/icons'

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
    <CallToAction title="Kontakt" icon={HolzarchitekturIcon} />
    <Wisdom
      backgroundImage={data.kirschblueten.childImageSharp.sizes}
      author="Joachim Jungreithmayr"
    />
    <Team />
    <Article
      image={data.history.childImageSharp.sizes}
      headline={
        <span>
          Seit 5<br /> Generationen
        </span>
      }
      intro="Das Jungreithmayr-Holzhaus: - etur sitas mo etur, cullabor lum. Icia atquatis atioresciat apic tem quia volorec."
      body="Nihillessi debisti asperio berfers perrumque audam, officaturio. Giae aborum reriant. Elessum accabor erspell uptaque et, officab orepedi as de lab ipicit, ut etur, optatibea num volore, solorro omnis quid ut a quo volupta tquias dolorum nem earum fuga. Hillabo rersperior archilit, ut aruptae. Nemposae voluptaquas aut quam venimol uptatquam erunt a non corempedi cor aut quiatem quia ne plaut eumquam nobitat. Ducium nis necest, offictius quat. Rum aliquiae omnis qui re nessumque arum at liberro blaborest ut autem con nime aut del est, sit, volorei cipsus eosam. , quam estis dolorisi ipit autem corendae corerumque sint."
    />
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
  }
`
