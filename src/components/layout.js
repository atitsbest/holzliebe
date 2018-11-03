import React from 'react'
import Header from './header'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
`

export default ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
)
