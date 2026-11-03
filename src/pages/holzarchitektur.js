import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import TextLink from '../components/TextLink'
import { FullImage, ImagePair } from '../components/Block'

const Holzarchitektur = ({ data }) => (
  <Layout>
    <PageHero title={['Holzarchitektur']} />
    <Intro lead="Wir planen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raffinierte Innovationen und architektonisches Gespür machen es möglich." />
    <ImagePair images={[data.half1, data.half2]} />
    <FullImage image={data.wide} />
    <Intro
      title={['Besichtigen']}
      lead="Fotos sind gut. Die Qualität von Holzarchitektur kann man aber nur im Raum erspüren. Deshalb laden wir Sie herzlich zu einem persönlichen Besuch zu uns nach Thening ein. Warnung: Das wird Sie begeistern!"
      link={<TextLink to="/kontakt">Termin vereinbaren</TextLink>}
    />
    <ImagePair images={[data.half3, data.half4]} />
    <Intro title={['Massiv', 'Holz', 'Architektur']} />
    <Cards
      items={[
        { image: data.p1, title: 'Pures Holz', text: 'Eine Wand aus Holz: Höchste Stabilität, perfekte Dämmwerte, elegante Konstruktion. Unsere Planungen reizen die enormen Werkstoffvorteile aus und ermöglichen eine unvergleichliche konstruktive Befreitheit: Keine Kältebrücken, dadurch schlankes Architekturdesign, extrem hohe Belastbarkeit, hohe Spannweiten und Auskragungen möglich.' },
        { image: data.p2, title: 'Wohlfühlatmosphäre', text: '„Ich habe mir nicht gedacht, dass so viel Holz so schön ist“, ist der häufigste Satz, den wir von BesucherInnen hören. Bei elegantem Design ist die Atmosphäre im Holzhaus freundlich, beruhigend, wohltuend und nachweislich gesund. Dennoch kann jede Wand gemalt oder verkleidet werden. Ganz nach Geschmack.' },
        { image: data.p3, title: 'Leichte Bearbeitbarkeit', text: 'Alle Leitungen können unaufwändig eingefräst werden, sie sind nachträglich einfach veränder- und erweiterbar, Bohren und Schrauben ohne Mauerdübel vereinfacht alle Montagen.' },
        { image: data.p4, title: 'Silber und Gold', text: 'Die Holzwände können auch außenseitig ganz pur und unbehandelt bleiben. Denn die Natur sorgt mit dem silbrigen Verwitterungsprozess an der Oberfläche für eine natürliche Schutzschicht, sodass das Regenwasser nie tiefer in die Wand eindringen kann. So sorgt der natürliche Werkstoff selbst für eine perfekte Lösung.' },
      ]}
    />
  </Layout>
)

export default Holzarchitektur

export const query = graphql`
  query architekturQuery {
    wide: file(relativePath: { eq: "jh_jungreithmayr_008.jpg" }) { ...Wide }
    half1: file(relativePath: { eq: "jh_jungreithmayr_007.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half2: file(relativePath: { eq: "jh_jungreithmayr_005.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half3: file(relativePath: { eq: "bauen_001.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half4: file(relativePath: { eq: "bauen_003.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    p1: file(relativePath: { eq: "jh_jungreithmayr_115.jpg" }) { ...Square }
    p2: file(relativePath: { eq: "jh_jungreithmayr_077.jpg" }) { ...Square }
    p3: file(relativePath: { eq: "jh_jungreithmayr_072.jpg" }) { ...Square }
    p4: file(relativePath: { eq: "jh_jungreithmayr_082.jpg" }) { ...Square }
  }
`
