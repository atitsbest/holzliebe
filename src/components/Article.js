import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Section } from './section'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const Wrapper = styled(Section)`
  padding: ${Typography.rhythm(1)} 10%;
  display: flex;

  ${media.mobile`
      flex-direction: column;
      padding-left: 1rem;
      padding-right: 1rem;
   `};

  .biopic {
    flex: 1 1 100px;
    height: 350px;
    background-size: cover;
    background-position: center;
    display: block;
    margin: 0;

    ${media.mobile`
      flex: 1 1 auto;
      margin-bottom: ${Typography.rhythm(1)};
    `};
  }

  div {
    flex: 1 1 50%;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      text-transform: uppercase;
      margin-bottom: ${Typography.rhythm(1)};
      font-weight: 100;
    }

    p {
      font-size: 0.9em;
      margin-bottom: 0;
      column-count: 2;

      strong {
        margin-right: 0.5em;
      }

      ${media.tablet`
        column-count: 1;
        column-gap: 2em;
        orphans: 3;
        hyphens: auto;
        widows: 3;
      `};
    }
  }
`

const Article = ({ image, headline, intro, body }) => (
  <Wrapper>
    <Img className="biopic" sizes={{ ...image, aspectRatio: 9 / 16 }} />
    <div>
      <h1>{headline}</h1>
      <p>
        <strong>{intro}</strong>
        {body}
      </p>
    </div>
  </Wrapper>
)

export default Article
