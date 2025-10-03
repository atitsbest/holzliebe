import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Section } from './section'
import Mitarbeiter from './Mitarbeiter'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const Wrapper = styled(Section)``
const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin: 0 -0.25rem;
`

const Frame = styled.div`
  flex: 1 0 25%;
  max-width: 25%;
  padding: 0 0.25rem ${Typography.rhythm(1)} 0.25rem;

  ${media.tablet`
    flex: 1 0 33.33%;
    max-width: 33.33%;
  `};

  ${media.mobile`
    flex: 1 0 50%;
    max-width: 50%;
  `};
`

const Header = styled.h1`
  text-transform: uppercase;
  max-width: 7em;
  padding: ${Typography.rhythm(1)} 1.5rem;
  padding-bottom: 0;
`

const Team = () => (
  <StaticQuery
    query={graphql`
      query Team {
        person1: file(relativePath: { eq: "mitarbeiter/derjo.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        person2: file(relativePath: { eq: "mitarbeiter/johannesstadler.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        person4: file(
          relativePath: { eq: "mitarbeiter/rolandheitzendorfer.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        person5: file(
          relativePath: { eq: "mitarbeiter/jh_jungreithmayr_163.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        person6: file(
          relativePath: { eq: "mitarbeiter/bernhardronacher.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        person9: file(
          relativePath: { eq: "mitarbeiter/markusschmidthaler.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        person7: file(relativePath: { eq: "mitarbeiter/owellinger.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header>Mitarbeiter/Innen</Header>
        <Inner>
          <Frame>
            <Mitarbeiter
              image={data.person1}
              name="Joachim Jungreithmayr"
              position="Geschäftsführer"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person4}
              name="Roland Heitzendorfer"
              position="Technischer Assistent, Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person2}
              name="Johannes Stadler"
              position="Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person9}
              name="Markus Schmidthaler"
              position="Tischlergeselle"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person5}
              name="Markus Eder"
              position="Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person6}
              name="Bernhard Ronacher"
              position="Tischlergeselle"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person7}
              name="Oliver Wellinger"
              position="Tischlergeselle"
            />
          </Frame>
        </Inner>
      </Wrapper>
    )}
  />
)

export default Team
