import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const Impressum = () => (
  <Layout>
    <h1>Impressum</h1>
    <p>
      Tischlerei Jungreithmayr
      <br />
      <br />
      Tischlerstrasse 6<br />A - 4062 Kirchberg-Thening
      <br />
      <br />
      Tel.:0043 7221 63 0 16
      <br />
      Fax.:0043 7221 63 0 61
      <br />
      <br />
      tischler@thening.at
    </p>
    <Link to="/datenschutz">Datenschutz</Link>
  </Layout>
)

export default Impressum
