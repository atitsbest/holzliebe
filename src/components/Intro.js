import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import { Section } from './Block'
import DisplayTitle from './DisplayTitle'

const Intro = ({ title, lead, image, link }) => (
  <Grid>
    {image && <GatsbyImage image={getImage(image)} alt="" />}
    <Text $withImage={Boolean(image)}>
      {title && <Headline forwardedAs="h2" lines={title} />}
      {lead && <Lead>{lead}</Lead>}
      {link}
    </Text>
  </Grid>
)

const Grid = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Theme.gap};
  align-items: start;

  ${media.mobile`grid-template-columns: 1fr;`};
`

const Text = styled.div`
  grid-column: ${p => (p.$withImage ? '2 / span 2' : '1 / span 2')};
  padding-top: ${p => (p.$withImage ? '0.5em' : 0)};

  ${media.mobile`grid-column: 1;`};
`

const Headline = styled(DisplayTitle)`
  font-size: clamp(2.25rem, 4.3vw, 5.2rem);
  margin-bottom: 0.35em;
`

const Lead = styled.p`
  text-transform: uppercase;
  font-size: clamp(1.125rem, 1.875vw, 2.25rem);
  line-height: 1.2;
  hyphens: auto;
  max-width: 34em;
`

export default Intro
