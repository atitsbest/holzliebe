import React from 'react'
import styled from 'styled-components'
import { Section } from './section'
import { RaumplanungIcon, TischleierIcon } from './icons'
import { HolzarchitekturIcon } from './icons/HolzarchitekturIcon'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const Wrapper = styled(Section)`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  margin-bottom: ${Typography.rhythm(.33)};

  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    ${media.tablet`flex-direction: column;`};

    > li {
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      strong {
        text-transform: uppercase;
      }

      p {
        font-size: 0.9em;
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
          <RaumplanungIcon {...iconProps} />
          <Title>Raumplanung</Title>
          <p>
            Am Anfang ist der Raum. Er soll schön werden, er soll bestens
            funktionieren! Unsere Raumplanun ist mehr, als ein Möbel ins Eck zu
            stellen.
          </p>
        </li>
        <li>
          <TischleierIcon {...iconProps} />
          <Title>Qualitätstischlere</Title>
          <p>
            Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Welche
            Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für
            Sie diese Fragen zu lösen.
          </p>
        </li>
        <li>
          <HolzarchitekturIcon {...iconProps} />
          <Title>Holzarchitektur</Title>
          <p>
            Wir planen und bauen elegante Massivholzhäuser mit unnachahmlicher
            Wohnatmosphäre. Raffinierte Innovationen und architektonisches
            Gespür machen es möglich.
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default SectionTopics
