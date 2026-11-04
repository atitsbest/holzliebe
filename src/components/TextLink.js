import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { displayFont } from '../utils/style'

export const Arrow = () => (
  <svg viewBox="0 0 24 24" width="0.85em" height="0.85em" aria-hidden="true">
    <path
      d="M3 12h16M12 4l8 8-8 8"
      stroke="currentColor"
      strokeWidth="3.5"
      fill="none"
    />
  </svg>
)

const TextLink = ({ to, href, children, className }) => (
  <A as={to ? Link : 'a'} to={to} href={href} className={className}>
    {children} <Arrow />
  </A>
)

const A = styled.a`
  ${displayFont};
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  margin-top: 1.4em;
  font-size: clamp(1.125rem, 1.875vw, 2.25rem);
  text-decoration: none;

  &:hover { text-decoration: underline; }
`

export default TextLink
