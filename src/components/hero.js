import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
const Hero = ({ sizes, image, label }) => {
  const img = image || sizes
  return (
    <Wrapper>
      <GatsbyImage image={getImage(img)} alt="" />
      {label && <Overlay src={label} alt="Originell" />}
    </Wrapper>
  )
}

export default Hero
