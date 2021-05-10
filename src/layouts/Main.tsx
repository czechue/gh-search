import React, { ReactNode, ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '../components/header/Header';
import Search from '../components/search/Search';

type MainProps = {
  children: ReactNode;
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
