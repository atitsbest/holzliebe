import React from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-images'
import styled from 'styled-components'
import Typography from '../utils/typography'
import { media } from '../utils/style'
import play from '../images/play.png'
import ReactPlayer from 'react-player'
var path = require('path')

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.photos.map(photo =>
        Object.assign({
          srcSet: photo.node.childImageSharp.fluid.srcSet,
          src: photo.node.childImageSharp.fluid.src,
          basename: path.basename(photo.node.childImageSharp.fluid.src),
        })
      ),
      currentVideoUrl: null,
    }
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo - 1 })
  }

  gotoNextLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo + 1 })
  }

  openLightbox(photo, event) {
    event.preventDefault()
    this.setState({ lightbox: true, photo })
  }

  closeLightbox() {
    this.setState({ lightbox: false })
  }

  showVideo(videoUrl, event) {
    event.preventDefault()
    this.setState({ currentVideoUrl: videoUrl })
  }

  render() {
    const { photos } = this.props
    return (
      <div>
        <ImageGrid>
          {photos.map((image, idx) => (
            <Frame key={idx}>
              {this.props.videos[
                path.basename(image.node.childImageSharp.fluid.src)
              ] ? (
                <a
                  href={image.node.childImageSharp.fluid.src}
                  onClick={e =>
                    this.showVideo(
                      this.props.videos[
                        path.basename(image.node.childImageSharp.fluid.src)
                      ],
                      e
                    )
                  }
                >
                  <div
                    style={{
                      position: 'relative',
                    }}
                  >
                    <Img
                      fluid={{
                        ...image.node.childImageSharp.fluid,
                        aspectRatio: 4 / 3,
                      }}
                    />
                    <img
                      src={play}
                      style={{
                        position: 'absolute',
                        maxWidth: '100%',
                        top: '40%',
                      }}
                      alt="Play"
                    />
                  </div>
                </a>
              ) : (
                <a
                  href={image.node.childImageSharp.fluid.src}
                  onClick={e => this.openLightbox(idx, e)}
                >
                  <Img
                    fluid={{
                      ...image.node.childImageSharp.fluid,
                      aspectRatio: 4 / 3,
                    }}
                  />
                </a>
              )}
            </Frame>
          ))}
        </ImageGrid>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
        {this.state.currentVideoUrl && (
          <div
            onClick={() => this.setState({ currentVideoUrl: null })}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              cursor: 'pointer',
              background: 'rgba(0,0,0,.8)',
            }}
          >
            <ReactPlayer url={this.state.currentVideoUrl} playing />
          </div>
        )}
      </div>
    )
  }
}

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.25rem;
`

const Frame = styled.div`
  flex: 1 0 25%;
  max-width: 25%;
  padding: 0 0.2rem ${Typography.rhythm(0.25)} 0.2rem;

  ${media.tablet`
    flex: 1 0 33.33%;
    max-width: 33.33%;
  `};

  ${media.mobile`
    flex: 1 0 50%;
    max-width: 50%;
  `};
`

export default Gallery
