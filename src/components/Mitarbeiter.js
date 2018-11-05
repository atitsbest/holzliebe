import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Theme from '../utils/theme'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Name = styled.strong`
  font-family: ${Theme.fonts.secondary};
  font-size: 1em;
  line-height: ${Typography.rhythm(0.75)};
  margin: ${Typography.rhythm(0.5)} 0 0;
`

const Position = styled.span`
  font-size: 0.9em;
`

const Image = styled(Img)`
  width: 100%;
`

const Mitarbeiter = ({ image, name, position }) => (
  <Wrapper>
    <Image sizes={{ ...image, aspectRatio: 4 / 3 }} />
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Wrapper>
)

export default Mitarbeiter
