import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import theme from '../common/theme/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
          <meta name="theme-color" content={theme.palette.primary.main} />
          <title>React repositories</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
