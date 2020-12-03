import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Section } from '../components/section'
import Hero from '../components/hero'
import ImageSlider from '../components/ImageSlider'
import SectionTopics from '../components/sectiontopics'
import HeroText from '../components/HeroText'
import Zitat from '../components/Zitat'
import CallToContact from '../components/CallToContact'
import Wisdom from '../components/Wisdom'
import Team from '../components/Team'
import History from '../components/History'
import { HolzarchitekturIcon } from '../components/icons'
import LabeledImage from '../components/LabeledImage'
import BackgroundImage from '../components/BackgroundImage'
import { Grid, Half, Quarter } from '../components/Grid'
import wohlfuehlen from '../images/wohlfuehlen.png'
import styled from 'styled-components'
import play from '../images/play.png'

export default class Index extends React.Component {
  state = {
    showVideo: false,
  }
  render() {
    const { data } = this.props
    return (
      <Layout>
        <Hero
          sizes={data.heroImage.childImageSharp.sizes}
          label={wohlfuehlen}
        />
        <Section>
          <SectionTopics />
        </Section>
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
            <Link to="/raumplanung">
              <LabeledImage
                image={{
                  ...data.raumplanung.childImageSharp.sizes,
                  aspectRatio: 21 / 11,
                }}
                label="Raumplanung"
              />
            </Link>
          </Half>
          <Quarter>
            <BackgroundImage sizes={data.raumplanung1.childImageSharp.sizes} />
          </Quarter>
          <Quarter>
            <BackgroundImage sizes={data.raumplanung2.childImageSharp.sizes} />
          </Quarter>
          <Half>
            <Link to="/tischlerei">
              <LabeledImage
                image={{
                  ...data.tischlerei.childImageSharp.sizes,
                  aspectRatio: 21 / 11,
                }}
                label="Tischlerei"
              />
            </Link>
          </Half>
          <Half>
            <BackgroundImage
              sizes={{
                ...data.tischlerei1.childImageSharp.sizes,
                aspectRatio: 21 / 11,
              }}
            />
          </Half>
          <Half>
            <Link to="/holzarchitektur">
              <LabeledImage
                image={{
                  ...data.architektur.childImageSharp.sizes,
                  aspectRatio: 21 / 11,
                }}
                label="Architektur"
              />
            </Link>
          </Half>
          <Quarter>
            <BackgroundImage
              sizes={{
                ...data.architektur1.childImageSharp.sizes,
                aspectRatio: 10.5 / 11,
              }}
            />
          </Quarter>
          <Quarter>
            <BackgroundImage
              sizes={{
                ...data.architektur2.childImageSharp.sizes,
                aspectRatio: 10.5 / 11,
              }}
            />
          </Quarter>
        </Grid>
        <Section style={{ marginBottom: 10, padding: '40px 10% 10px' }}>
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
              <Hero
                sizes={data.videoImage.childImageSharp.sizes}
                label={play}
              />
            </HeroContainer>
          )}
          <h2 style={{ marginTop: 30, textAlign: 'center' }}>
            100 % Leidenschaft für JEDEN TAG FREUDE
          </h2>
        </Section>

        <Zitat
          motto={['Holz,', 'Raum,', 'Lebens-', 'raum']}
          image={data.joImage.childImageSharp.sizes}
          text1="HOLZ, SEE, STADT, THENING."
          subtext1="Den Duft von Holz habe ich hier schon als Kind erlebt. Den Duft des Hallstättersees als Jugendlicher in der Holz-HTL. Den Duft der Stadt beim Architekturstudium in Graz. Alles zusammen verschmilzt zu einem besonderen „Parfum“: Mehr als eine Tischlerei."
          text2="Joachim Jungreithmayr"
          subtext2="5. Generation"
        />
        <Hero sizes={data.hero2Image.childImageSharp.sizes} />
        <CallToContact title="Kontakt" icon={HolzarchitekturIcon} />
        <Wisdom
          backgroundImage={data.kirschblueten.childImageSharp.sizes}
          author="Joachim Jungreithmayr"
        />
        <Team />
        <History />
      </Layout>
    )
  }
}

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
    videoImage: file(relativePath: { eq: "impressionen/DSC_2170.jpg" }) {
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
    joImage: file(relativePath: { eq: "mitarbeiter/derjo.jpg" }) {
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
    raumplanung1: file(relativePath: { eq: "jh_jungreithmayr_055.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    raumplanung2: file(relativePath: { eq: "raumplanung_plan.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
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
    tischlerei1: file(relativePath: { eq: "jh_jungreithmayr_181.jpg" }) {
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
    architektur1: file(relativePath: { eq: "jh_jungreithmayr_061.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    architektur2: file(relativePath: { eq: "jh_jungreithmayr_082.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 480) {
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
  border: white;
  background: #fff;
`

const HeroContainer = styled.div`
  cursor: pointer;
`
