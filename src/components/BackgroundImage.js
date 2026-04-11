import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Frame = styled.div`
  position: relative;
  width: 100%;
  ${({ $aspectRatio }) =>
    $aspectRatio ? `aspect-ratio: ${$aspectRatio};` : `height: 100%;`}

  .gatsby-image-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`

const BackgroundImage = ({ sizes, image, alt = '', className }) => {
  const source = image || sizes
  if (!source) return null

  const img = getImage(source)
  if (!img) return null

  return (
    <Frame $aspectRatio={source.aspectRatio} className={className}>
      <GatsbyImage image={img} alt={alt} />
    </Frame>
  )
}

export default BackgroundImage
