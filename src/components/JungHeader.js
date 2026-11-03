import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from 'react-hamburger-menu'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import logo from '../images/jung/logo-weiss.svg'

const links = [
  ['/raumplanung', 'Raumplanung'],
  ['/tischlerei', 'Qualitätstischlerei'],
  ['/holzarchitektur', 'Holzarchitektur'],
  ['/impressionen', 'Impressionen'],
  ['/about', 'Über uns'],
  ['/kontakt', 'Kontakt'],
]

const Header = ({ home }) => {
  const [open, setOpen] = useState(false)
  return (
    <Bar>
      {!home && (
        <Link to="/" aria-label="Startseite">
          <Logo src={logo} alt="JUNG*" />
        </Link>
      )}
      <Nav $open={open}>
        <ul>
          {links.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                activeClassName="active"
                partiallyActive
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
      <Burger
        type="button"
        aria-label="Menü"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Hamburger
          isOpen={open}
          menuClicked={() => {}}
          width={24}
          height={16}
          color={Theme.colors.white}
        />
      </Burger>
    </Bar>
  )
}

const Bar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
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

  ${media.tablet`
    display: ${p => (p.$open ? 'flex' : 'none')};
    position: fixed;
    inset: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    font-size: 1.5rem;

    ul { flex-direction: column; align-items: center; gap: 1em; }
  `};
`

const Burger = styled.button`
  display: none;
  margin-left: auto;
  z-index: 11;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;

  ${media.tablet`display: block;`};
`

export default Header
