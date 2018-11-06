import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Typography from "../utils/typography"
import Theme from "../utils/theme"
import { media } from "../utils/style"
import { Grid, Half, Quarter } from "../components/Grid"

const BulletPoint = ({motto, number, title, text, image, odd}) => <Wrapper odd={odd}>
    <Quarter><Motto>{motto}</Motto></Quarter>
    <NumberWrapper>
        {image && <Img sizes={image} alt="title" style={{width:"100%", height:"100%"}} />}
        <Number>{number}</Number>
    </NumberWrapper>
    <TextWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </TextWrapper>
</Wrapper>

const Wrapper = styled(Grid)`
    padding: ${Typography.rhythm(.25)} 0;
    background-color: ${p => p.odd ? Theme.colors.secondary : "#fff" };
`

const Motto = styled.h2`
  position: absolute;
  text-transform: uppercase;
  width: 6em;
  font-weight: 700;
  color: #A8B9B9;
  margin: 0 1rem;

  ${media.mobile`
    display: none;
  `};
`

const NumberWrapper = styled(Quarter)`
    background-color: #A8B9B9;
    display: flex;
    align-items: flex-end;
    position: relative;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    `

const TextWrapper = styled(Half)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Number = styled.h1`
    color: rgba(255,255,255,.4);
    margin: 0;
    line-height: 1em;
    font-size: 8em;
    position: absolute;
`

const Title = styled.strong`
    margin: 0 1rem;
`

const Text = styled.p`
    margin: 0 1rem;
`

export default BulletPoint;