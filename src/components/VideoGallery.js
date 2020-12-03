import React from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-images'
import styled from 'styled-components'
import Typography from '../utils/typography'
import { media } from '../utils/style'

class VideoGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
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

  render() {
    return (
      <div>
        <ImageGrid>
          {this.props.videos.map((set, idx) => (
            <Frame key={idx}>
              <a
                href={set.url}
                onClick={e => this.openLightbox(idx, e)}
              >
                <Img
                  fluid={{
                    ...set.previewImage.childImageSharp.fluid,
                    aspectRatio: 4 / 3,
                  }}
                />
              </a>
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

export default VideoGallery
