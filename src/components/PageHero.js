import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import DisplayTitle from './DisplayTitle'
import logoWhite from '../images/jung/logo-weiss.svg'

const PageHero = ({ image, bg = 'black', color = 'white', title, logo }) => (
  <Hero style={{ background: Theme.colors[bg], color: Theme.colors[color] }}>
    {image && <GatsbyImage image={getImage(image)} alt="" className="bg" />}
    <Center>
      {logo ? (
        <h1>
          <Logo src={logoWhite} alt="JUNG*" />
        </h1>
      ) : (
        <Headline lines={title} star />
      )}
    </Center>
  </Hero>
)

const Hero = styled.div`
  position: relative;
  height: 56vw;
  min-height: 420px;
  max-height: 100svh;
  overflow: hidden;

  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`

const Center = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 ${Theme.gutter};
`

const Headline = styled(DisplayTitle)`
  font-size: clamp(2.5rem, 7.5vw, 9rem);
  hyphens: auto;
`

const Logo = styled.img`
  display: block;
  width: clamp(10rem, 24vw, 28rem);
`

export default PageHero
