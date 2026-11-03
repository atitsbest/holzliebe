import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import { Section } from './Block'

const Quote = ({ image, text, author }) => (
  <Grid>
    <GatsbyImage image={getImage(image)} alt={author} />
    <Block>
      <p>{text}</p>
      <footer>{author}</footer>
    </Block>
  </Grid>
)

const Grid = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Theme.gap};

  ${media.mobile`grid-template-columns: 1fr;`};
`

const Block = styled.blockquote`
  grid-column: 2 / span 2;
  padding-top: 2.2vw;
  max-width: 34em;

  p {
    text-transform: uppercase;
    font-size: clamp(1.125rem, 1.875vw, 2.25rem);
    line-height: 1.2;
    hyphens: auto;
  }
  footer {
    margin-top: 1.4em;
    font-size: clamp(0.95rem, 1.375vw, 1.65rem);
  }

  ${media.mobile`grid-column: 1;`};
`

export default Quote
