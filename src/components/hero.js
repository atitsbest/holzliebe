import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { responsiveRatio } from '../utils/style'
import originell from '../images/originell.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & .gatsby-image-wrapper {
    width: 100%;
  }
`

const Overlay = styled.img`
  position: absolute;
  max-width: 400px;
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
