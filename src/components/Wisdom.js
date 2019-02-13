import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from '../utils/style'
import Theme from '../utils/theme'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${Typography.rhythm(0.25)};
`

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${Typography.rhythm(1)} ${Typography.rhythm(1)};
`

const Author = styled.strong`
  font-family: ${Theme.fonts.secondary};
  font-size: 1.1em;
  margin-bottom: ${Typography.rhythm(1)};
`

const Quote = styled.h1`
  color: rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5em;
  max-width: 600px;

  ${media.tablet`
    font-size: 2em;
  `};
  ${media.mobile`
    font-size: 1em;
  `};
`

const Wisdom = ({ backgroundImage, author }) => (
  <Wrapper>
    <Img sizes={backgroundImage} />
    <Content>
      <Author>{author}</Author>
      <Quote>
        "Man sagt, dass auch Kirschholz die Herzfrequenz senkt. Bei mir ist es
        umgekehrt: Ich finde es aufregend!"
      </Quote>
    </Content>
  </Wrapper>
)

export default Wisdom
