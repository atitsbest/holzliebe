import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from '../utils/style'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: ${Typography.rhythm(0.33)};

  & .gatsby-image-wrapper {
    width: 100%;
  }
`

const Overlay = styled.img`
  position: absolute;
  width: 50%;
  max-width: 400px;

  ${media.mobile`
    max-width: 200px;
  `};
`
const Hero = ({ sizes, label }) => {
  return (
    <Wrapper>
      <Img sizes={{ ...sizes, aspectRatio: 16 / 9 }} />
      <Overlay src={label} alt="Originell" />
    </Wrapper>
  )
}

export default Hero
