// Gatsby SSR APIs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
import React from 'react'

// Adobe Fonts kit: Riant Display 700, Figtree 300
const FONT_KIT = 'https://use.typekit.net/zph7icy.css'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'de' })
  setHeadComponents([
    <link key="typekit-preconnect" rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />,
    <link key="typekit" rel="stylesheet" href={FONT_KIT} />,
  ])
}
