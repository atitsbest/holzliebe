import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from '../utils/style'
import Typography from "../utils/typography"
import originell from '../images/originell.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: ${Typography.rhythm(.33)};

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
const Hero = ({ sizes }) => {
  return (
    <Wrapper>
      <Img sizes={{ ...sizes, aspectRatio: 16 / 9 }} />
      <Overlay src={originell} alt="Originell" />
    </Wrapper>
  )
}

export default Hero
