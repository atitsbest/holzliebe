import React from 'react'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Typography from '../utils/typography'
import './slick.css'
import './slick-theme.css'
import image_next from '../images/slider_next.gif'
import image_prev from '../images/slider_prev.gif'

export default class ImageSlider extends React.Component {
  settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  render() {
    return (
      <StyledSlider {...this.settings}>
        {this.props.images.map((imageData, idx) => (
          <div key={idx}>
            <GatsbyImage image={getImage(imageData)} alt="" />
          </div>
        ))}
      </StyledSlider>
    )
  }
}

const StyledSlider = styled(Slider)`
  margin-bottom: ${Typography.rhythm(1.5)};
`

const ArrowImage = styled.img`
  width: 50px;
`

const NextArrow = props => (
  <div {...props}>
    <ArrowImage src={image_next} alt="Nächstes Bild" />
  </div>
)
const PrevArrow = props => (
  <div {...props}>
    <ArrowImage src={image_prev} alt="Letztes Bild" />
  </div>
)
