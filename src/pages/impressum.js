import React from 'react'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import { Prose } from '../components/Block'

const Impressum = () => (
  <Layout>
    <PageHero title={['Impressum']} />
    <Prose>
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
        ATU 81099534
      </p>
    </Prose>
  </Layout>
)

export default Impressum
