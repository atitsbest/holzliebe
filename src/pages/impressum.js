import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const Impressum = () => (
  <Layout>
    <div style={{ padding: '16px' }}>
      <h1>Impressum</h1>
      <p>
        Jungreithmayr Tischlerei GmbH
        <br />
        <br />
        Tischlerstraße 6<br />A - 4062 Kirchberg-Thening
        <br />
        <br />
        Tel.:0043 7221 63 0 16
        <br />
        Fax.:0043 7221 63 0 61
        <br />
        <br />
        tischler@thening.at
        <br />
        <br />
        ATU 22634102
      </p>
      <Link to="/datenschutz">Datenschutz</Link>
    </div>
  </Layout>
)

export default Impressum
