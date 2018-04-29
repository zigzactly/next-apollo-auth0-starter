import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import config from 'next/config'
const { publicRuntimeConfig } = config()

import { Provider } from 'rebass'

const backgroundColor = "#dcb2a6"
const fontColor = "#204a56"

injectGlobal`
  * { box-sizing: border-box; }
  body { 
    margin: 0; 
    // background-color: ${backgroundColor};
    background-color: white;
    color: ${fontColor};
    line-height: calc(16/9 * 1em);
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>{publicRuntimeConfig.appConfig.appName}</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Provider>
            <Main />
            <NextScript />
          </Provider>
        </body>
      </html>
    )
  }
}