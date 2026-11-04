import React from 'react'
import Slider from 'react-slick'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Section } from './Block'
import { Arrow } from './TextLink'
import './slick.css'

const SlideArrow = ({ onClick, dir }) => (
  <ArrowButton
    type="button"
    onClick={onClick}
    $dir={dir}
    aria-label={dir === 'next' ? 'Nächstes Bild' : 'Vorheriges Bild'}
  >
    <Arrow />
  </ArrowButton>
)

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlideArrow dir="next" />,
  prevArrow: <SlideArrow dir="prev" />,
}

const GallerySlider = () => {
  const { allFile } = useStaticQuery(graphql`
    query GallerySlider {
      allFile(
        filter: { relativeDirectory: { eq: "jung/galerie" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 1620)
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Slider {...settings}>
        {allFile.nodes.map((node, i) => (
          <GatsbyImage key={i} image={getImage(node)} alt="" />
        ))}
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled(Section)`
  position: relative;
`

const ArrowButton = styled.button`
  position: absolute;
  bottom: 2vw;
  ${p => (p.$dir === 'next' ? 'right: 2vw;' : 'left: 2vw; transform: scaleX(-1);')}
  z-index: 1;
  padding: 0.25em;
  border: 0;
  background: none;
  color: #fff;
  font-size: clamp(1.5rem, 2.6vw, 3rem);
  line-height: 0;
  cursor: pointer;
`

export default GallerySlider
