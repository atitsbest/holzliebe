import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Theme from '../utils/theme'
import logo from '../images/jung/logo-weiss.svg'

const links = [
  ['/about', 'Über uns'],
  ['/kontakt', 'Kontakt'],
]

const Header = ({ home }) => (
  <Bar>
    {!home && (
      <Link to="/" aria-label="Startseite">
        <Logo src={logo} alt="JUNG*" />
      </Link>
    )}
    <Nav>
      <ul>
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} activeClassName="active" partiallyActive>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  </Bar>
)

const Bar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: max(20px, 5vw) ${Theme.gutter} 0;
  color: ${Theme.colors.white};
`

const Logo = styled.img`
  display: block;
  width: clamp(4.5rem, 7vw, 8rem);
`

const Nav = styled.nav`
  margin-left: auto;
  text-transform: uppercase;
  font-size: clamp(0.95rem, 1.375vw, 1.65rem);

  ul {
    display: flex;
    gap: 1.1em;
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    white-space: nowrap;
  }
  a.active,
  a:hover {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`

export default Header
