import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Theme from '../utils/theme'
import Typography from '../utils/typography'
import MoreToRead from '../components/MoreToRead'
import FacebookVideo from '../components/FacebookVideo'

const BlogTitle = styled.h1`
  font-family: ${Theme.fonts.secondary};
  margin-bottom: ${Typography.rhythm(0.5)};
`

const BlogSubTitle = styled.h4`
  margin-bottom: ${Typography.rhythm(0.5)};
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  font-weight: 500;
`

const Author = styled.small`
  margin-bottom: ${Typography.rhythm(1)};
  display: block;
`

const BlogBody = styled.p`
  font-family: ${Theme.fonts.secondary};
  font-weight: 400;
`

export default ({ data }) => (
  <Layout>
    <hr />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 728,
        margin: '40px auto 32px',
      }}
    >
      <div style={{ margin: '0 16px' }}>
        {data.allStrapiBlogpost.edges.map(post => (
          <div style={{ marginBottom: 64 }}>
            <Link
              to={`/blog/${post.node.fields.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <BlogTitle>{post.node.title}</BlogTitle>
              <BlogSubTitle>{post.node.subtitle}</BlogSubTitle>
              <Author>von {post.node.user.username}</Author>
              {post.node.image1 && (
                <div style={{ textAlign: 'center' }}>
                  {post.node.facebook_video ? (
                    <FacebookVideo
                      url={post.node.facebook_video}
                      title={post.node.title}
                    />
                  ) : (
                    <Img fluid={post.node.image1.childImageSharp.fluid} />
                  )}
                  <small
                    style={{
                      margin: '8px 0 40px',
                      display: 'block',
                      opacity: 0.7,
                    }}
                  >
                    {post.node.image1_text}
                  </small>
                </div>
              )}
            </Link>
            <BlogBody>
              <ReactMarkdown source={post.node.body} />
            </BlogBody>
            {/*
          {post.node.image2 && (
            <ImageSlider
              images={[
                post.node.image2.childImageSharp.fluid,
                post.node.image3.childImageSharp.fluid,
              ]}
            />
          )}
            */}
            <div
              style={{
                textAlign: 'center',
                marginTop: 32,
                opacity: 0.5,
              }}
            >
              &middot;&nbsp;&middot;&nbsp;&middot;
            </div>
          </div>
        ))}
      </div>
    </div>
    <MoreToRead />
  </Layout>
)

export const query = graphql`
  query blogPostsQuery {
    allStrapiBlogpost(sort: { fields: [created_at], order: DESC }) {
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
          fields {
            slug
          }
          facebook_video
        }
      }
    }
  }
`
