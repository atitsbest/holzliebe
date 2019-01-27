import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Theme from '../utils/theme'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const Wrapper = styled.div`
  position: relative;
  background: ${Theme.colors.secondaryBg};
  display: flex;
  justify-content: center;
  padding: ${Typography.rhythm(2)} 0;
  margin-bottom: ${Typography.rhythm(0.33)};
`

const Motto = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  width: 9em;
  font-weight: 700;
  opacity: 0.25;
  padding: ${Typography.rhythm(1)} ${Typography.rhythm(1)};

  ${media.mobile`
    display: none;
  `};
`

const Inner = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${Typography.rhythm(1)};
`

const Image = styled(Img)`
  max-width: 400px;
  width: 60%;
  margin-bottom: ${Typography.rhythm(1)};
`

const Text1 = styled.strong`
  text-align: center;
  text-transform: uppercase;
`
const Subtext1 = styled.p`
  text-align: center;
  line-height: 1.4em;
  margin-bottom: ${Typography.rhythm(1)};
`

const Text2 = styled.strong`
  text-align: center;
  font-size: 1.1rem;
  font-family: ${Theme.fonts.secondary};
`
const Subtext2 = styled.p`
  text-align: center;
  margin-bottom: 0;
`
const Zitat = ({ motto, text1, subtext1, text2, subtext2, image }) => (
  <Wrapper>
    <Inner>
      <Motto>
        {motto.map(m => (
          <React.Fragment>
            {m}
            <br />
          </React.Fragment>
        ))}
      </Motto>
      <Image
        sizes={image}
        alt={motto}
        style={{ mixBlendMode: 'multiply', background: '#CAD3CE' }}
      />
      <Text1>{text1}</Text1>
      <Subtext1>{subtext1}</Subtext1>
      <Text2>{text2}</Text2>
      <Subtext2>{subtext2}</Subtext2>
    </Inner>
  </Wrapper>
)

export default Zitat
