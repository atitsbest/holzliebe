import React from 'react'
import styled from 'styled-components'
import BackgroundImage from './BackgroundImage'
import Typography from '../utils/typography'
import Theme from '../utils/theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  img {
    transition: all 0.4s ease-in-out !important;
  }

  &:hover {
    img {
      transform: scale(1.25);
    }
  }
`

const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

const Label = styled.h2`
  position: absolute;
  text-transform: uppercase;
  background: #fff;
  padding: 0.1rem 1rem;
  margin: 0;
  font-weight: 300;
  color: ${Theme.colors.text};
`
const Text = styled.p`
  margin: ${Typography.rhythm(0.5)} 0;
  font-size: 0.9rem;
  text-decoration: none;
  color: ${Theme.colors.text};
`

const LabeledImage = ({ image, label, text }) => (
  <Wrapper>
    <Inner>
      <BackgroundImage sizes={image} alt={label} />
      <Label>{label}</Label>
    </Inner>
    {text && <Text>{text}</Text>}
  </Wrapper>
)

export default LabeledImage
