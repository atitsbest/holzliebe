import React from 'react'
import styled from 'styled-components'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${Typography.rhythm(2)} auto;
  max-width: 480px;
`

const Title = styled.strong`
  margin-top: ${Typography.rhythm(1)};
`

const Text = styled.p`
  text-align: center;
`

const TopicHeader = ({ icon, title, text }) => {
  const Icon = icon
  return (
    <Wrapper>
      <Icon />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default TopicHeader
