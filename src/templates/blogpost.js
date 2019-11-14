import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Theme from '../utils/theme'
import Typography from '../utils/typography'
import MoreToRead from '../components/MoreToRead'

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

export default ({ data, pageContext }) => (
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
        <div style={{ marginBottom: 0 }}>
          <BlogTitle>{data.strapiBlogpost.title}</BlogTitle>
          <BlogSubTitle>{data.strapiBlogpost.subtitle}</BlogSubTitle>
          <Author>von {data.strapiBlogpost.user.username}</Author>
          {data.strapiBlogpost.facebook_video ? (
            <div style={{ marginBottom: 8 }}>
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${
                  data.strapiBlogpost.facebook_video
                }&width=728&show_text=false&height=408&appId`}
                width="728"
                height="408"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
                allowFullScreen="true"
                title={data.strapiBlogpost.title}
              />
            </div>
          ) : (
            data.strapiBlogpost.image1 && (
              <div style={{ textAlign: 'center' }}>
                <Img fluid={data.strapiBlogpost.image1.childImageSharp.fluid} />
                <small
                  style={{
                    margin: '8px 0 40px',
                    display: 'block',
                    opacity: 0.7,
                  }}
                >
                  {data.strapiBlogpost.image1_text}
                </small>
              </div>
            )
          )}
          <BlogBody>
            <ReactMarkdown source={data.strapiBlogpost.body} />
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
      </div>
    </div>
    <MoreToRead />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    strapiBlogpost(fields: { slug: { eq: $slug } }) {
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
      facebook_video
    }
  }
`
