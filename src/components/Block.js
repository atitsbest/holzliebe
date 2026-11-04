import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'

export const Section = styled.section`
  max-width: ${Theme.maxWidth};
  margin: max(48px, 5vw) auto;
  padding: 0 ${Theme.gutter};
`

export const FullImage = ({ image }) => (
  <Section>
    <GatsbyImage image={getImage(image)} alt="" />
  </Section>
)

const Pair = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Theme.gap};

  ${media.mobile`grid-template-columns: 1fr;`};
`

export const ImagePair = ({ images }) => (
  <Pair>
    {images.map((image, i) => (
      <GatsbyImage key={i} image={getImage(image)} alt="" />
    ))}
  </Pair>
)

export const Prose = styled(Section)`
  max-width: calc(60rem + 2 * ${Theme.gutter});
  margin-left: 0;
  font-size: clamp(1rem, 1.15vw, 1.3rem);
  line-height: 1.5;

  h2, h3 { font-weight: 300; text-transform: uppercase; margin: 1.6em 0 0.4em; }
  strong, b { font-weight: 300; text-transform: uppercase; }
  p { margin-bottom: 1em; }
`
