import React from 'react'
import Header from './JungHeader'
import Footer from './JungFooter'
import GlobalStyle from './GlobalStyle'
import './fonts.css'

const Layout = ({ children, home = false }) => (
  <>
    <GlobalStyle />
    <Header home={home} />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
