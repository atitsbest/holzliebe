import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import TextLink from '../components/TextLink'
import { FullImage } from '../components/Block'

const Raumplanung = ({ data }) => (
  <Layout>
    <PageHero bg="grey" color="lime" title={['Raumplanung']} />
    <Intro lead="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung ist mehr, als ein Möbel ins Eck zu stellen." />
    <Cards
      items={[
        { image: data.schlafen, title: 'Schlafen', text: 'Wozu Raumplanung in einem Raum, in dem man die Augen schließt? Weil für einen guten Schlaf eine besonders gute Atmosphäre hilfreich ist. Das kann man planen!' },
        { image: data.wohnen, title: 'Wohnen', text: 'Was auch immer im Trend liegt: Vergessen Sie es! Denn Wohnen ist dann gut, wenn es genau zu Ihnen passt. Das machen wir!' },
        { image: data.kochen, title: 'Kochen', text: 'Wir kochen nicht. Aber wir wissen, was es braucht, damit Sie es mit Freude tun können. Das ist Erfahrung!' },
        { image: data.buero, title: 'Büro', text: 'Der Erfolg Ihrer Arbeit liegt nicht am Design Ihres Schreibtischs. Aber wir können Design, Funktion und Umsetzung so perfekt kombinieren, dass die Menschen es glauben werden. Das ist Erfolg!' },
        { image: data.badezimmer, title: 'Badezimmer', text: 'Wer glaubt, dass sich Holz und Wasser nicht vertragen, vergisst, dass Holz in der Natur „erfunden“ wurde. Diese Qualität wissen wir richtig einzusetzen. Das wird Sie überraschen!' },
        { image: data.garderobe, title: 'Garderobe', text: 'Nur ein Stauraum für ein paar Mäntel? Manchmal ja. Aber manchmal der erste Eindruck von Ihrem Lebensraum. Wie das Vorwort zu einem guten Buch: Weglegen oder Weiterlesen?' },
        { image: data.freiraum, title: 'Freiraum', text: 'Viele Menschen gestalten den Raum im Freien mit Beton. Weil es so „praktisch“ ist. Wir gestalten auch mit Holz. Weil es so angenehm ist. Das macht frei!' },
        { image: data.sauna, title: 'Sauna', text: 'Eine Sauna aus Holz zu bauen ist nicht überraschend. Eine schöne Sauna aus Holz zu bauen wird Sie überraschen. Bereit für den Design-Aufguss?' },
        { image: data.accessoires, title: 'Accessoires', text: 'Ob Küchenfunktionen oder Verarbeitungsdetails. Wenn es keine gute Lösung gibt am Markt, dann erfinden wir eine. Das ist Liebe zum Detail!' },
      ]}
    />
    <FullImage image={data.plan} />
    <Intro
      lead="Ein guter Plan beginnt nicht am Papier. Auch nicht im Kopf. Sondern beim Zuhören. Nur so kann Ihr Wohntraum in Erfüllung gehen. Das ist nicht Traumdeutung, sondern Gespür, Leidenschaft und ganz viel Erfahrung."
      link={<TextLink to="/kontakt">Jetzt anfragen</TextLink>}
    />
    <FullImage image={data.abschluss} />
  </Layout>
)

export default Raumplanung

export const query = graphql`
  fragment Square on File {
    childImageSharp {
      gatsbyImageData(width: 800, aspectRatio: 1)
    }
  }
  fragment Wide on File {
    childImageSharp {
      gatsbyImageData(width: 1620)
    }
  }
  query raumplanungQuery {
    plan: file(relativePath: { eq: "raumplanung_plan.jpg" }) { ...Wide }
    abschluss: file(relativePath: { eq: "jh_jungreithmayr_126.jpg" }) { ...Wide }
    schlafen: file(relativePath: { eq: "jh_jungreithmayr_081.jpg" }) { ...Square }
    wohnen: file(relativePath: { eq: "jh_jungreithmayr_122.jpg" }) { ...Square }
    kochen: file(relativePath: { eq: "jh_jungreithmayr_085.jpg" }) { ...Square }
    buero: file(relativePath: { eq: "jh_jungreithmayr_079.jpg" }) { ...Square }
    badezimmer: file(relativePath: { eq: "jh_jungreithmayr_072.jpg" }) { ...Square }
    garderobe: file(relativePath: { eq: "raumplanung_garderobe.jpg" }) { ...Square }
    freiraum: file(relativePath: { eq: "jh_jungreithmayr_008.jpg" }) { ...Square }
    sauna: file(relativePath: { eq: "raumplanung_sauna.jpg" }) { ...Square }
    accessoires: file(relativePath: { eq: "jh_jungreithmayr_048.jpg" }) { ...Square }
  }
`
