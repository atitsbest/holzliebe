import React from 'react'
import { Link } from 'gatsby'
// import facebook_icon from '../images/Facebook-icon_negativ.svg'
import styled from 'styled-components'
import Typography from '../utils/typography'
import { media } from '../utils/style'

const Wrapper = styled.footer`
  background: #000;
  color: #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-right: ${Typography.rhythm(4)};

    > li {
      margin-bottom: 0;
      a,
      a:hover,
      a:visited,
      a:active {
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }

  .facebook {
    position: absolute;
    bottom: 0;
    right: ${Typography.rhythm(1)};
    margin: 0;
  }
`

const Inner = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: ${Typography.rhythm(1)};

  ${media.mobile`
    flex-direction: column;
  `};
`

/*const Image = styled.img`
  margin-bottom: ${Typography.rhythm(0.5)};
  width: 48px;
`
*/

const Footer = () => (
  <Wrapper>
    <Inner>
      <p className="address">
        {' '}
        Tischlerstraße 6<br /> A-4062 Thening
        <br /> Tel. +43 7221 630 16
        <br /> tischler@thening.at
      </p>
      <div style={{ marginBottom: 24 }}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJungreithmayr-Architektur-Tischlerei-872429343120179%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
          title="facebook page"
        />
      </div>
      <ul>
        {/*<li>
          <a href="/">Newsletter</a>
        </li>*/}
        <li>
          <Link to="/impressum">Impressum</Link>
        </li>
        <li>
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
        <li>
          <a href="mailto:tischler@thening.at">Kontakt</a>
        </li>
      </ul>
      {/*
      <a href="/" className="facebook">
        <Image src={facebook_icon} />
      </a>
*/}
    </Inner>
  </Wrapper>
)

export default Footer
