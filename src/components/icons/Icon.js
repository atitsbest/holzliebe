import React from 'react'
import Theme from '../../utils/theme'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${p => p.backgroundColor || Theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.size || 80}px;
  height: ${p => p.size || 80}px;
`

const Image = styled.img`
  width: 100%;
  margin: 0;
`

export const Icon = ({ src, alt, backgroundColor, size }) => (
  <Wrapper backgroundColor={backgroundColor} size={size}>
    <Image src={src} alt={alt} />
  </Wrapper>
)
