import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MoreToRead = () => (
  <StaticQuery
    query={graphql`
      query moreToReadQuery {
        allStrapiBlogpost {
          edges {
            node {
              title
              subtitle
              body
              user {
                username
              }
              image1 {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image1_text
              image2 {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ background: '#f9f9f9', padding: '32px 0' }}>
        <div style={{ maxWidth: 728, margin: '0 auto' }}>
          <h4>Mehr Geschichten</h4>
          <hr />
          <div style={{ display: 'flex' }}>
            {data.allStrapiBlogpost.edges
              .sort(function() {
                return 0.5 - Math.random()
              })
              .slice(0, 3)
              .map(post => (
                <div
                  style={{ flex: '1 1 33%', flexWrap: 'wrap', margin: '0 8px' }}
                >
                  {post.node.image1 && (
                    <Img
                      fluid={{
                        ...post.node.image1.childImageSharp.fluid,
                        aspectRatio: 4 / 3,
                      }}
                    />
                  )}
                  <h4 style={{ marginTop: 16, marginBottom: 8 }}>
                    {post.node.title}
                  </h4>
                  <small>von {post.node.user.username}</small>
                </div>
              ))}
          </div>
        </div>
      </div>
    )}
  />
)

export default MoreToRead
