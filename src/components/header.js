import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../utils/style'
import Typography from '../utils/typography'

import logo from '../images/logo.gif'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0;
  margin-top: ${Typography.rhythm(2)};

  ${media.tablet`flex-direction: column`};
`

const TitleLink = styled(Link)`
  text-decoration: none;
  border: none;
`

const Logo = styled.img`
  max-width: 22rem;
  margin: 0;
`

const Nav = styled.nav`
  ${media.phone`display: none;`};
  display: flex;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0 -${Typography.rhythm(1)} ${Typography.rhythm(1)} 0;
    > li {
      margin: ${Typography.rhythm(1)} ${Typography.rhythm(1.5)} 0 0;

      a,
      a:hover,
      a:visited,
      a:active {
        color: #000;
        text-decoration: none;
        white-space: nowrap;
      }
    }
  }
`

const activeLinkStyle = {
  fontWeight: 700,
  textTransform: 'uppercase',
}

const Header = ({ siteTitle }) => (
  <Wrapper>
    <TitleLink to="/">
      <Logo src={logo} alt="logo" />
    </TitleLink>
    <Nav>
      <ul>
        <li>
          <Link to="/raumplanung" activeStyle={activeLinkStyle}>
            raumplanung.
          </Link>
        </li>
        <li>
          <Link to="/tischlerei" activeStyle={activeLinkStyle}>
            qualitätstischlerei.
          </Link>
        </li>
        <li>
          <Link to="/holzarchitektur" activeStyle={activeLinkStyle}>
            holzarchitektur.
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={activeLinkStyle}>
            über uns.
          </Link>
        </li>
      </ul>
    </Nav>
  </Wrapper>
)

export default Header
