import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Theme from '../utils/theme'
import Typography from '../utils/typography'
import { Section } from './section'

const Wrapper = styled(Section)`
  padding: ${Typography.rhythm(2)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${Theme.colors.secondaryBg};
  padding: 0 ${Typography.rhythm(2)};
  text-align: center;
  max-width: 400px;
  width: 50%;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
`

const Title = styled.h2`
  text-transform: uppercase;
  color: #fff;
  margin: ${Typography.rhythm(0.5)} 0 ${Typography.rhythm(0.25)};
`
const Text = styled.p`
  padding-top: ${Typography.rhythm(2)};
  max-width: 80%;
  text-align: center;
  margin-bottom: 0;
`

const CallToAction = ({ icon, title, url, text }) => {
  const Icon = icon

  return (
    <Wrapper>
      <Button to={url || '/'}>
        <Icon backgroundColor="rgba(0,0,0,.10)" size={50} />
        <Title>{title}</Title>
      </Button>
      {text && (
        <Text>
          {text.map(t => (
            <React.Fragment>
              {t}
              <br />
            </React.Fragment>
          ))}
        </Text>
      )}
    </Wrapper>
  )
}

export default CallToAction
