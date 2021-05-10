import React, { useEffect } from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../common/theme/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const queryClientRef = React.useRef(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClientRef.current}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
