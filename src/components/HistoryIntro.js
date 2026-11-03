import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Intro from './Intro'
import TextLink from './TextLink'

const History = () => {
  const { image } = useStaticQuery(graphql`
    query HistoryIntro {
      image: file(relativePath: { eq: "jung/historisch.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
    }
  `)
  return (
    <Intro
      image={image}
      title={['Seit 5', 'Generationen']}
      lead="1890 gründete Johann Angermayr in Thening die Tischlerei, die heute in fünfter Generation am selben Standort weiterbesteht. Handwerkliches Geschick und Wertschätzung für den Werkstoff Holz und für die Kundschaft wurden über Adam, Walter und Wilfried weitergegeben. Mit jeder Generation kamen Wissen und Präzision dazu, deshalb entstehen heute Möbel, die schöner und besser sind als je zuvor."
      link={<TextLink to="/kontakt">Jetzt anfragen</TextLink>}
    />
  )
}

export default History
