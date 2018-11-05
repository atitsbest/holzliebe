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
  padding: ${Typography.rhythm(1)};
  padding-bottom: 0;
`

const Team = () => (
  <StaticQuery
    query={graphql`
      query Team {
        person1: file(relativePath: { eq: "jh_jungreithmayr_096.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        person2: file(relativePath: { eq: "jh_jungreithmayr_145.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        person3: file(relativePath: { eq: "jh_jungreithmayr_150.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        person4: file(relativePath: { eq: "jh_jungreithmayr_154.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        person5: file(relativePath: { eq: "jh_jungreithmayr_163.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        person6: file(relativePath: { eq: "jh_jungreithmayr_165.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
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
              image={data.person1.childImageSharp.sizes}
              name="Joachim Jungreithmayr"
              position="Geschäftsführer"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person2.childImageSharp.sizes}
              name="Joachim Jungreithmayr"
              position="Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person3.childImageSharp.sizes}
              name="Vorname Nachname"
              position="Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person4.childImageSharp.sizes}
              name="Vorname Nachname"
              position="Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person5.childImageSharp.sizes}
              name="Vorname Nachname"
              position="Tischlermeister"
            />
          </Frame>
          <Frame>
            <Mitarbeiter
              image={data.person6.childImageSharp.sizes}
              name="Vorname Nachname"
              position="Tischlermeister"
            />
          </Frame>
        </Inner>
      </Wrapper>
    )}
  />
)

export default Team
