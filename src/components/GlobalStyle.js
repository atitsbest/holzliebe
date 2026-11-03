import { createGlobalStyle } from 'styled-components'
import Theme from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html:root {
    -webkit-text-size-adjust: 100%;
    font-size: 100%;
    line-height: normal;
  }
  html body {
    margin: 0;
    background: ${Theme.colors.white};
    color: ${Theme.colors.black};
    font-family: ${Theme.fonts.body};
    font-weight: 300;
    font-size: clamp(1.0625rem, 1.5625vw, 1.875rem);
    line-height: 1.3;
  }
  body h1, body h2, body h3, body h4, body h5, body h6 {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-rendering: auto;
  }
  body h1, body h2, body h3, body h4, body h5, body h6,
  body p, body ul, body ol, body li, body blockquote,
  body figure, body address, body img {
    margin: 0;
  }
  body ul, body ol, body blockquote { padding: 0; }
  body img { max-width: 100%; }
  body a { color: inherit; }
`

export default GlobalStyle
