import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import Quote from '../components/Quote'
import History from '../components/HistoryIntro'
import { FullImage, ImagePair } from '../components/Block'

const Tischlerei = ({ data }) => (
  <Layout>
    <PageHero bg="green" color="rose" title={['Qualitäts-', 'tischlerei']} />
    <Intro lead="Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Welche Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für Sie diese Fragen zu lösen." />
    <ImagePair images={[data.half1, data.half2]} />
    <Quote
      image={data.hobel}
      text="Die meisten Menschen erkennen die Qualität eines Möbels an seiner großartigen Ausstrahlung, obwohl sie die nicht benennen können. Deshalb haben unsere Tischlermeister nicht einfach handwerkliches Geschick. Sondern sie wissen, wie man die Ausstrahlung von Holz zur Entfaltung bringt. Mit Wissen, Können UND Spüren."
      author="Joachim Jungreithmayr, Geschäftsführer"
    />
    <FullImage image={data.wide} />
    <Intro title={['Darauf sind', 'wir stolz']} />
    <Cards
      items={[
        { image: data.p1, title: 'Maserungstreue', text: 'Sie macht aus einer Holzfront eine stolze Holzfront. Wir suchen Holzrohlinge persönlich aus und fügen sie zu einem schönen Bild zusammen. So „malen“ Tischler.' },
        { image: data.p2, title: 'Funktionsdetails', text: 'Wir planen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raffinierte Innovationen und architektonisches Gespür machen es möglich. Wenn es keine gute Lösung gibt am Markt, dann erfinden wir eine. Dennoch sind wir keine „Erfinder“. Das österreichische Wort dafür ist „Tüftler“. Bei Lösungen im Detail sind wir „Holz-Tüftler“' },
        { image: data.p3, title: 'Pure Qualität', text: 'Pures Wasser ist kristallklar. Purer Fruchtsaft intensiv und unverfälscht. Pures Design geradlinig und dem Auge wohltuend, oft überraschend einfach. Pure Qualität ist alles zusammen: klar, intensiv, unverfälscht und wohltuend.' },
        { image: data.p4, title: 'Koordination', text: 'Das Zusammenspiel von allen nötigen Gewerken, wie Schlosser, Glaserer, Fliesenleger, Elektriker, auch Künstler und Baumeister und vieles mehr gehört geplant und organisiert. Auch das ist Qualität.' },
      ]}
    />
    <History />
  </Layout>
)

export default Tischlerei

export const query = graphql`
  query tischlereiQuery {
    wide: file(relativePath: { eq: "jh_jungreithmayr_138.jpg" }) { ...Wide }
    half1: file(relativePath: { eq: "jh_jungreithmayr_146.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half2: file(relativePath: { eq: "jh_jungreithmayr_161.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    hobel: file(relativePath: { eq: "hobel.jpg" }) { ...Square }
    p1: file(relativePath: { eq: "stolz.jpg" }) { ...Square }
    p2: file(relativePath: { eq: "stolz2.jpg" }) { ...Square }
    p3: file(relativePath: { eq: "stolz3.jpg" }) { ...Square }
    p4: file(relativePath: { eq: "stolz4.jpg" }) { ...Square }
  }
`
