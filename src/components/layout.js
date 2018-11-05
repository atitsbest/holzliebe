import React from 'react'
import Header from './header'
import Footer from './Footer'
import styled from 'styled-components'
import { media } from '../utils/style'

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 0.5rem;

  ${media.tablet`
    padding: 0;
  `};
`

export default ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </React.Fragment>
)
