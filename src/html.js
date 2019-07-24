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
          <div id="fb-root" />
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.3"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2414071635325940');
            fbq('track', 'PageView');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=2414071635325940&ev=PageView&noscript=1"
            />
          </noscript>
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
