import React from 'react'
import Header from './header'
import Footer from './Footer'
import styled from 'styled-components'
import { media } from '../utils/style'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 0.5rem;

  ${media.tablet`
    padding: 0;
  `};
`
const SuperTitle = styled.div`
  padding: 4px 8px;
  background: #000;
  color: #fff;
  font-size: 0.8rem;
  flex: 1 0 100%;

  a {
    color: #fff;
    text-decoration: none;
  }

  > div {
    max-width: 1360px;
    margin: 0 auto;
    text-align: right;
  }
`

export default ({ children }) => (
  <React.Fragment>
    <SuperTitle>
      <div>
        <a href="tel:+43722163016" data-rel="external">
          Tel. 0 (043) 7221 630 16
        </a>
      </div>
    </SuperTitle>
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    <Footer />
  </React.Fragment>
)
