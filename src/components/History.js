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
        intro="Das Jungreithmayr-Holzhaus: - etur sitas mo etur, cullabor lum. Icia atquatis atioresciat apic tem quia volorec."
        body="Nihillessi debisti asperio berfers perrumque audam, officaturio. Giae aborum reriant. Elessum accabor erspell uptaque et, officab orepedi as de lab ipicit, ut etur, optatibea num volore, solorro omnis quid ut a quo volupta tquias dolorum nem earum fuga. Hillabo rersperior archilit, ut aruptae. Nemposae voluptaquas aut quam venimol uptatquam erunt a non corempedi cor aut quiatem quia ne plaut eumquam nobitat. Ducium nis necest, offictius quat. Rum aliquiae omnis qui re nessumque arum at liberro blaborest ut autem con nime aut del est, sit, volorei cipsus eosam. , quam estis dolorisi ipit autem corendae corerumque sint."
      />
    )}
  />
)

export default History
