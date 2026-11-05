import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import Statement from '../components/Statement'
import Quote from '../components/Quote'
import ImageSlider from '../components/GallerySlider'

const Index = ({ data }) => (
  <Layout home>
    <PageHero image={data.hero} logo />
    <Intro
      title={['Räume', 'perfektionieren']}
      lead="Die schönsten Momente passieren zu Hause. Beim Kaffee an dem Tisch, den du dir immer gewünscht hast. Im Sessel, der wie für dich gemacht ist. Besonders im Entwurf, perfekt in der Ausführung."
    />
    <Cards
      items={[
        {
          image: data.interior,
          title: 'Interior Design',
          text: 'Interior Design gestaltet nicht nur, wie ein Raum aussieht, sondern wie er sich anfühlt. Proportionen, Licht, hochwertige Materialien und maßgefertigte Möbel greifen ineinander, damit Atmosphäre entsteht.',
          link: '/kontakt',
        },
        {
          image: data.tischlerei,
          title: 'Tischlerei',
          text: 'Unsere Tischlerei baut, was wir entwerfen. Vom Einzelstück bis zur kompletten Einrichtung entstehen Möbel mit Liebe zum Detail: perfekt in der Passung, premium im Material, besonders in der Ausführung.',
          link: '/kontakt',
        },
        {
          image: data.architektur,
          title: 'Architektur',
          text: 'Holzarchitektur heißt, ein ganzes Haus aus Holz zu denken: von der ersten Skizze bis zum Einzug. Wir planen und bauen Häuser, die warm wirken, hochwertig verarbeitet sind und Charakter haben.',
          link: '/kontakt',
        },
      ]}
    />
    <Statement lines={['Freude', 'wohnt mit']} />
    <Quote
      image={data.joachim}
      text="Perfektes Design ist selten laut. Es zeigt sich im Detail: in der Kante, die sich gut anfühlt, im Holz, das mit den Jahren schöner wird, in der Proportion, die einfach stimmt."
      author="Joachim Jungreithmayr"
    />
    <ImageSlider />
  </Layout>
)

export default Index

export const query = graphql`
  query indexQuery {
    hero: file(relativePath: { eq: "jung/header.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 3840)
      }
    }
    interior: file(relativePath: { eq: "jung/interior.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
    tischlerei: file(relativePath: { eq: "jung/tischlerei.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
    architektur: file(relativePath: { eq: "jung/architektur.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
    joachim: file(relativePath: { eq: "jung/joachim-zitat.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
  }
`
