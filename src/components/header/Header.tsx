import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import type { ReactElement } from 'react';
import React from 'react';

export default function Header(): ReactElement {
  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Github Repositories
        </Typography>
      </Box>
    </Container>
  );
}
