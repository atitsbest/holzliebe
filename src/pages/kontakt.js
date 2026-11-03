import React from 'react'
import styled from 'styled-components'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import TextLink from '../components/TextLink'
import ImageSlider from '../components/GallerySlider'
import { Section } from '../components/Block'
import Theme from '../utils/theme'

const Kontakt = () => (
  <Layout>
    <PageHero
      bg="green"
      color="rose"
      title={['Schönes', 'braucht Platz', 'zum Bleiben']}
    />
    <Center>
      <Big href={Theme.contact.emailHref}>Jetzt anfragen</Big>
    </Center>
    <ImageSlider />
  </Layout>
)

const Center = styled(Section)`
  text-align: center;
`

const Big = styled(TextLink)`
  margin-top: 0;
  font-size: clamp(1.75rem, 3.4vw, 4rem);
`

export default Kontakt
