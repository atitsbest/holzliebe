import React from 'react'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styled from 'styled-components'
import Typography from '../utils/typography'
import { media } from '../utils/style'
import play from '../images/play.png'
import ReactPlayer from 'react-player'

const getBasename = (path) => path.split('/').pop()

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    const photos = props.photos.map(photo => {
      const src = getSrc(photo.node)
      return {
        src: src,
        basename: getBasename(src),
      }
    })
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photo: 0,
      photos: photos,
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
          {photos.map((image, idx) => {
            const src = getSrc(image.node)
            const basename = getBasename(src)
            const isVideo = Boolean(this.props.videos[basename])
            return (
              <Frame key={idx}>
                <a
                  href={src}
                  onClick={e =>
                    isVideo
                      ? this.showVideo(this.props.videos[basename], e)
                      : this.openLightbox(idx, e)
                  }
                >
                  <Thumb>
                    <GatsbyImage image={getImage(image.node)} alt="" />
                    {isVideo && <PlayIcon src={play} alt="Play" />}
                  </Thumb>
                </a>
              </Frame>
            )
          })}
        </ImageGrid>
        <Lightbox
          open={this.state.lightbox}
          close={() => this.closeLightbox()}
          slides={this.state.photos}
          index={this.state.photo}
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
              zIndex: 9999,
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

const Thumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;

  .gatsby-image-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover !important;
    object-position: center !important;
  }
`

const PlayIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
  pointer-events: none;
`

export default Gallery
