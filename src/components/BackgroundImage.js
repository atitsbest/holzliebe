import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;

  // Adjust image positioning (if image covers area with defined height)
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`

export default BackgroundImage
