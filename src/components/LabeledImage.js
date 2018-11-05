import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const Label = styled.h2`
  position: absolute;
  text-transform: uppercase;
  background: #fff;
  padding: 0.1rem 1rem;
  font-weight: 300;
`

const LabeledImage = ({ image, label }) => (
  <Wrapper>
    <Image sizes={image} alt={label} />
    <Label>{label}</Label>
  </Wrapper>
)

export default LabeledImage
