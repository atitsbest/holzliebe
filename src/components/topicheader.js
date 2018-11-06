import React from 'react'
import styled from 'styled-components'
import Typography from '../utils/typography'

const Wrapper = styled.div`
  margin: ${Typography.rhythm(2)} 1rem;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 48rem;
  margin: 0 auto;
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
      <Inner>
        {Icon && <Icon />}
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Inner>
    </Wrapper>
  )
}

export default TopicHeader
