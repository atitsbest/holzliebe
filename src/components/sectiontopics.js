import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { RaumplanungIcon, TischleierIcon } from './icons'
import { HolzarchitekturIcon } from './icons/HolzarchitekturIcon'
import Typography from '../utils/typography'
import Theme from '../utils/theme'
import { media } from '../utils/style'

const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  margin-bottom: ${Typography.rhythm(0.33)};

  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    ${media.tablet`flex-direction: column;`};

    > li {
      padding: 10px 20px;
      text-align: center;
      list-style-type: none;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: ${Theme.colors.text};

        strong {
          text-transform: uppercase;
        }

        p {
          font-size: 0.9em;
        }
      }
    }
  }
`

const Title = styled.strong`
  margin-top: ${Typography.rhythm(1)};
`

const iconProps = {
  backgroundColor: '#000',
  size: 50,
}

const SectionTopics = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/raumplanung">
            <RaumplanungIcon {...iconProps} />
            <Title>Raumplanung</Title>
            <p>
              Am Anfang ist der Raum. Er soll schön werden, er soll bestens
              funktionieren! Unsere Raumplanun ist mehr, als ein Möbel ins Eck
              zu stellen.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tischlerei">
            <TischleierIcon {...iconProps} />
            <Title>Qualitätstischlerei</Title>
            <p>
              Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Welche
              Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für
              Sie diese Fragen zu lösen.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/holzarchitektur">
            <HolzarchitekturIcon {...iconProps} />
            <Title>Holzarchitektur</Title>
            <p>
              Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher
              Wohnatmosphäre. Raffinierte Innovationen und architektonisches
              Gespür machen es möglich.
            </p>
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default SectionTopics
