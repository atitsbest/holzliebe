import React from 'react'
import styled from 'styled-components'
import Theme from '../utils/theme'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  background: ${Theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${Typography.rhythm(2)} 0;
  margin-bottom: ${Typography.rhythm(.33)};
`

const MainText = styled.h1`
  text-align: center;
  color: rgba(0,0,0,.25);
  text-transform: uppercase;
`

const SubText = styled.h3`
  text-align: center;
  font-family: ${Theme.fonts.secondary};
  line-height: 1.4em;
  font-weight: 400;
  margin-bottom: 0;
`

const HeroText = ({ text, subtext }) => (
  <Wrapper>
    <MainText>{text}</MainText>
    <SubText>{subtext}</SubText>
  </Wrapper>
)

export default HeroText;

