import React from 'react'
import styled from 'styled-components'
import { Section } from './Block'
import DisplayTitle from './DisplayTitle'

const Statement = ({ lines }) => (
  <Wrapper>
    <Big forwardedAs="h2" lines={lines} star />
  </Wrapper>
)

const Wrapper = styled(Section)`
  text-align: center;
  margin-top: max(80px, 11vw);
  margin-bottom: max(80px, 11vw);
`

const Big = styled(DisplayTitle)`
  font-size: clamp(2.5rem, 7.5vw, 9rem);
`

export default Statement
