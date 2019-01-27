import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from './Article'

const History = () => (
  <StaticQuery
    query={graphql`
      query History {
        history: file(relativePath: { eq: "history.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `}
    render={data => (
      <Article
        image={data.history.childImageSharp.sizes}
        headline={
          <span>
            Seit 5<br /> Generationen
          </span>
        }
        intro="Das ist Johann Angermayr. Er hat bereits 1890 die Tischlerei in Thening gegründet. Das ist bald 130 Jahre aus."
        body="Am selben Standort wie jetzt baute er Werkstatt und Gebäude, die es zum Teil noch heute gibt. Vieles hat sich verändert seither und Vieles ist mit Fortschritt und Know How wohl auch leichter geworden. Aber das handwerkliche Geschick für diesen außergewöhnlichen Werkstoff Holz und die Wertschätzung für den Kunden und Auftraggeber hat es schon damals gegeben. Das habe ich bei meinem Vater Wilfried erlebt, und der hat es bei seinem Vater Walter erlebt, und der hat es bei seinem Vater Adam erlebt, und der hat es von seinem Schwiegervater Johann gelernt. Deshalb glaube ich sogar, dass wir heute schönere und bessere Möbel bauen können als vor 5 Generationen, weil wir mehr wissen über die Verarbeitung und die Präzision höher geworden ist. Davon ist in jeder Generation etwas dazu gekommen und hat daran gearbeitet. Bis heute. Dafür bin ich dankbar."
      />
    )}
  />
)

export default History
