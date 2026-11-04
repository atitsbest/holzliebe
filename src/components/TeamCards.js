import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Cards from './Cards'

// file name in src/images/jung/team → person
const members = [
  ['01', 'Joachim Jungreithmayr', 'Geschäftsführer'],
  ['02', 'Roland Heitzendorfer', 'Technischer Assistent, Tischlermeister'],
  ['03', 'Johannes Stadler', 'Tischlermeister'],
  ['04', 'Markus Schmidthaler', 'Tischlergeselle'],
  ['05', 'Markus Eder', 'Tischlermeister'],
  ['06', 'Bernhard Ronacher', 'Tischlergeselle'],
  ['07', 'Oliver Wellinger', 'Tischlergeselle'],
  ['08', 'Maximilian Hametner', 'Lehrling'],
]

const Team = () => {
  const { allFile } = useStaticQuery(graphql`
    query TeamCards {
      allFile(filter: { relativeDirectory: { eq: "jung/team" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 800, aspectRatio: 1)
          }
        }
      }
    }
  `)
  const images = Object.fromEntries(allFile.nodes.map(n => [n.name, n]))
  return (
    <Cards
      items={members.map(([file, name, role]) => ({
        image: images[file],
        title: name,
        text: role,
      }))}
    />
  )
}

export default Team
