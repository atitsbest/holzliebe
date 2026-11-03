import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import { Section } from './Block'
import TextLink from './TextLink'

const Cards = ({ items }) => (
  <Grid>
    {items.map(({ image, title, text, link }) => (
      <Card key={title}>
        <GatsbyImage image={getImage(image)} alt={title} />
        <Title>{title}</Title>
        {text && <p>{text}</p>}
        {link && <TextLink to={link}>Jetzt anfragen</TextLink>}
      </Card>
    ))}
  </Grid>
)

const Grid = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${Theme.gap};
  row-gap: max(40px, 4vw);

  ${media.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${media.mobile`grid-template-columns: 1fr;`};
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  hyphens: auto;
`

const Title = styled.h3`
  text-transform: uppercase;
  font-size: clamp(1.25rem, 2.08vw, 2.5rem);
  line-height: 1.1;
  margin-top: 1em;
  margin-bottom: 0.15em;
`

export default Cards
