import React from 'react'
import styled from 'styled-components'
import { displayFont } from '../utils/style'

const DisplayTitle = ({ as = 'h1', lines, star = false, className }) => (
  <Title as={as} className={className}>
    {lines.map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
    {star && <Star aria-hidden="true">*</Star>}
  </Title>
)

const Title = styled.h1`
  ${displayFont};
`

const Star = styled.span`
  display: inline-block;
  font-size: 0.32em;
  vertical-align: top;
  margin-left: 0.35em;
  letter-spacing: 0;
  line-height: 1;
`

export default DisplayTitle
