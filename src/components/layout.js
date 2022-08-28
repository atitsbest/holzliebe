import React from 'react'
import Header from './header'
import Footer from './Footer'
import styled from 'styled-components'
import { media } from '../utils/style'
import "./fonts.css";

import fbIcon from '../images/Facebook-icon_negativ.svg'

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          lineHeight: 1,
        }}
      >
        <a href="tel:+43722163016" data-rel="external">
          Tel. +43 7221 630 16
        </a>
        &nbsp; &middot; &nbsp;
        <a
          href="https://www.facebook.com/Jungreithmayr-Architektur-Tischlerei-872429343120179/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ lineHeight: 1 }}
        >
          <img
            style={{ height: 24, margin: 0, padding: 0 }}
            src={fbIcon}
            alt="Facebook"
          />
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
