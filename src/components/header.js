import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../utils/style'
import Typography from '../utils/typography'
import Theme from '../utils/theme'
import Hamburger from 'react-hamburger-menu'

import logo from '../images/logo.gif'

const Wrapper = styled.header`
  display: flex;
  margin: ${Typography.rhythm(1.5)} 0 ${Typography.rhythm(0.5)};
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${media.tablet`
    margin-top: ${Typography.rhythm(1)};
    align-items: flex-start;
  `};
`

const TitleLink = styled(Link)`
  text-decoration: none;
  border: none;
`

const Logo = styled.img`
  max-width: 22rem;
  width: 30vw;
  margin: 0;

  ${media.tablet`
    max-width: 14rem;
    width: 80vw;
    margin: 0 1rem;
  `};
`

const Nav = styled.nav`
  transitions: all 500ms;
  display: flex;
  margin: 0 0 0 auto;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0 0 ${Typography.rhythm(1)} 0;
    > li {
      margin: ${Typography.rhythm(1)} ${Typography.rhythm(1)} 0 0;

      &:last-child {
        margin-right: 0.5rem;
      }

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

  ${media.desktop`display: none;`};

  ${media.desktop`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Theme.colors.secondaryBg};
    display: ${p => (p.isOpen ? 'block' : 'none')};
    opacity: .95;
    z-index: 10;

    ul {
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      margin: ${Typography.rhythm(2)} 0 0;
      padding: 0;

      li {
        font-size: 1.5em;
        margin-right: 0;
        color: #fff;
      }
    }
  `};
`

const HamburgerWrapper = styled.div`
  padding: 7px 5px;
  border: 0.15rem solid #333;
  margin: 0 1rem;
  z-index: 11;
  display: none;

  ${media.desktop`
    display: block;
  `};
`

const activeLinkStyle = {
  fontWeight: 700,
  textTransform: 'uppercase',
}

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <Wrapper>
        <TitleLink to="/">
          <Logo src={logo} alt="logo" />
        </TitleLink>
        <Nav isOpen={this.state.isOpen}>
          <ul>
            <li>
              <Link to="/raumplanung" activeStyle={activeLinkStyle}>
                Raumplanung.
              </Link>
            </li>
            <li>
              <Link to="/tischlerei" activeStyle={activeLinkStyle}>
                Qualitätstischlerei.
              </Link>
            </li>
            <li>
              <Link to="/holzarchitektur" activeStyle={activeLinkStyle}>
                Holzarchitektur.
              </Link>
            </li>
            <li>
              <Link to="/impressionen" activeStyle={activeLinkStyle}>
                Impressionen.
              </Link>
            </li>
          {/*  <li>
              <Link
                to="/blog"
                activeStyle={activeLinkStyle}
                partiallyActive={true}
              >
                Blog.
              </Link>
            </li>
          */}
            <li>
              <Link to="/about" activeStyle={activeLinkStyle}>
                Über uns.
              </Link>
            </li>
          </ul>
        </Nav>
        <HamburgerWrapper>
          <Hamburger
            isOpen={this.state.isOpen}
            menuClicked={() => this.setState({ isOpen: !this.state.isOpen })}
            width={18}
            height={13}
          />
        </HamburgerWrapper>
      </Wrapper>
    )
  }
}

export default Header
