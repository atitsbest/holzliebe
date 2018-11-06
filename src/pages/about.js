import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ImageSlider from '../components/ImageSlider'
import SectionTopics from '../components/sectiontopics'
import CallToAction from '../components/CallToAction'
import Team from '../components/Team'
import History from '../components/History'
import Article from '../components/Article'
import { HolzarchitekturIcon } from '../components/icons'
import wohlfuehlen from '../images/wohlfuehlen.png'

export default ({ data }) => (
  <Layout>
    <Hero sizes={data.heroImage.childImageSharp.sizes} label={wohlfuehlen} />
    <Article
      image={data.joImage.childImageSharp.sizes}
      headline={
        <span>
          Joachim <br />
          Jungreithmayr
        </span>
      }
      intro="Das Jungreithmayr-Holzhaus: - etur sitas mo etur, cullabor lum. Icia atquatis atioresciat apic tem quia volorec."
      body="Nihillessi debisti asperio berfers perrumque audam, officaturio. Giae aborum reriant. Elessum accabor erspell uptaque et, officab orepedi as de lab ipicit, ut etur, optatibea num volore, solorro omnis quid ut a quo volupta tquias dolorum nem earum fuga. Hillabo rersperior archilit, ut aruptae. Nemposae voluptaquas aut quam venimol uptatquam erunt a non corempedi cor aut quiatem quia ne plaut eumquam nobitat. Ducium nis necest, offictius quat. Rum aliquiae omnis qui re nessumque arum at liberro blaborest ut autem con nime aut del est, sit, volorei cipsus eosam. , quam estis dolorisi ipit autem corendae corerumque sint."
    />
    <ImageSlider
      images={[
        data.sliderImage1.childImageSharp.sizes,
        data.sliderImage2.childImageSharp.sizes,
        data.sliderImage3.childImageSharp.sizes,
        data.sliderImage4.childImageSharp.sizes,
      ]}
    />
    <History />
    <Team />
    <CallToAction title="Kontakt" icon={HolzarchitekturIcon} />
    <SectionTopics />
  </Layout>
)

export const query = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "jh_jungreithmayr_006.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage1: file(relativePath: { eq: "jh_jungreithmayr_145.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage2: file(relativePath: { eq: "jh_jungreithmayr_163.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage3: file(relativePath: { eq: "jh_jungreithmayr_165.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sliderImage4: file(relativePath: { eq: "jh_jungreithmayr_181.jpg" }) {
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
  }
`
