import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ImageSlider from '../components/ImageSlider'
import SectionTopics from '../components/sectiontopics'
import CallToContact from '../components/CallToContact'
import Team from '../components/Team'
import History from '../components/History'
import Article from '../components/Article'
import { HolzarchitekturIcon } from '../components/icons'
import play from '../images/play.png'

export default class About extends React.Component {
  state = {
    showVideo: false,
  }
  render() {
    const { data } = this.props
    return (
      <Layout>
        {this.state.showVideo ? (
          <VideoContainer>
            <EmbededVideo
              src="https://www.youtube-nocookie.com/embed/bCeBSIXRKCI?color=white&modestbranding=1&rel=0&feature=oembed&showinfo=0&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </VideoContainer>
        ) : (
          <HeroContainer onClick={() => this.setState({ showVideo: true })}>
            <Hero sizes={data.heroImage.childImageSharp.sizes} label={play} />
          </HeroContainer>
        )}
        <Article
          image={data.joImage.childImageSharp.sizes}
          headline={
            <span>
              Joachim <br />
              Jungreithmayr
            </span>
          }
          intro="Was haben Graz, Thening und Hallstatt gemeinsam?"
          body="Es sind meine wichtigsten Ausbildungsstätten, vom elterlichen Betrieb über die HTL für Möbelbau bis hin zum Architekturstudium. Diese Vielseitigkeit von der handwerklichen Selbstverständlichkeit bis zur raffinierten Planungskompetenz weiß ich heute sehr zu schätzen und macht mir an meinem Beruf am meisten Freude. Fordern Sie mich heraus! Die Lösungen werden uns beiden gefallen"
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
        <CallToContact title="Kontakt" icon={HolzarchitekturIcon} />
        <SectionTopics />
      </Layout>
    )
  }
}

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
    joImage: file(relativePath: { eq: "mitarbeiter/derjo.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

const VideoContainer = styled.div`
  position: relative;
  padding: 0 10% 56.25% 10%;
  height: 0;
  overflow: hidden;
  background: #f1f1f1;
`

const EmbededVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const HeroContainer = styled.div`
  cursor: pointer;
`
