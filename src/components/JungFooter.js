import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Theme from '../utils/theme'
import { media } from '../utils/style'

const { contact } = Theme

const Footer = () => (
  <Wrapper>
    <div>
      <Name>
        Jungreithmayr
        <br />
        Interior Design &amp; Tischlerei
      </Name>
      <address>
        Tischlerstraße 6, A-4062 Thening
        <br />
        <a href={contact.phoneHref}>{contact.phone}</a>
        <br />
        <a href={contact.emailHref}>{contact.email}</a>
      </address>
    </div>
    <Links>
      <li>
        <Link to="/impressum">Impressum</Link>
      </li>
      <li>
        <Link to="/datenschutz">Datenschutz</Link>
      </li>
      <li>
        <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </li>
      <li>
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </li>
    </Links>
  </Wrapper>
)

const Wrapper = styled.footer`
  max-width: ${Theme.maxWidth};
  margin: 0 auto;
  padding: max(40px, 5vw) ${Theme.gutter} max(40px, 4vw);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  font-size: clamp(0.95rem, 1.375vw, 1.65rem);
  line-height: 1.25;

  address { font-style: normal; }
  a { text-decoration: none; }
  a:hover { text-decoration: underline; }

  ${media.mobile`flex-direction: column;`};
`

const Name = styled.p`
  text-transform: uppercase;
  margin-bottom: 0.6em;
`

const Links = styled.ul`
  list-style: none;
  padding: 0;
  text-align: right;
  text-transform: uppercase;

  ${media.mobile`text-align: left;`};
`

export default Footer
