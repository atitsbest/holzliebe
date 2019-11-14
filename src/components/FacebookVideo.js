import React from 'react'

const facebookResponsive = {
  overflow: 'hidden',
  paddingBottom: '56.25%',
  marginBottom: '8px',
  position: 'relative',
  height: 0,
}

const facebookResponsiveIframe = {
  left: 0,
  top: 0,
  height: '100%',
  width: '100%',
  position: 'absolute',
}

const FacebookVideo = ({ url, title }) => {
  return (
    <div style={facebookResponsive}>
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${url}&width=728&show_text=false&height=408&appId`}
        width="728"
        height="408"
        style={facebookResponsiveIframe}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
        title={title}
      />
    </div>
  )
}

export default FacebookVideo
