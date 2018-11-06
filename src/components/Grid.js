import styled from "styled-components"
import Typography from "../utils/typography"
import { media } from "../utils/style"

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem -0.25rem ${Typography.rhythm(0.125)};
`

export const Half = styled.div`
  flex: 0 1 calc(50% - 0.5rem);
  margin: 0.25rem;

  ${media.mobile`
    flex: 0 1 calc(100% - .5rem);
  `};
`

export const Quarter = styled.div`
  flex: 0 1 calc(25% - 0.5rem);
  margin: 0.25rem;

  ${media.mobile`
    flex: 0 1 calc(50% - .5rem);
  `};
`