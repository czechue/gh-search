import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import type { ReactNode, ReactElement } from 'react';
import React from 'react';

import Header from '../components/header/Header';
import Search from '../components/search/Search';

type MainProps = {
  readonly children: ReactNode;
};

export default function Main({ children }: MainProps): ReactElement {
  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <Header />
        <Search />
        {children}
      </Box>
    </Container>
  );
}
