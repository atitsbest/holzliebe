import React from 'react'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import TextLink from '../components/TextLink'
import { Section } from '../components/Block'

const NotFoundPage = () => (
  <Layout>
    <PageHero title={['Seite nicht', 'gefunden']} />
    <Section>
      <TextLink to="/">Zur Startseite</TextLink>
    </Section>
  </Layout>
)

export default NotFoundPage
