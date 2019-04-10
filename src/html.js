import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <link
            rel="stylesheet"
            type="text/css"
            href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
          />
          <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.addEventListener("load", function()
            {window.cookieconsent.initialise({
              palette: {
                popup: {
                  background: '#cad3ce',
                  text: 'rgba(0,0,0,.5)',
                },
                button: {
                  background: '#ffffff',
                  text: '#333',
                },
              },
              position: 'bottom-left',
              content: {
                message:
                  'Wir nutzen Cookies, um Ihre Erfahrung auf dieser Webseite zu verbessern. Manche Cookies sind notwendig, damit unsere Website funktioniert.',
                dismiss: 'Verstanden',
                link: 'Mehr erfahren',
              },
            })}
            );`,
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
