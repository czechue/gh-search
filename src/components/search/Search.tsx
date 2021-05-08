import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

export default function Search() {
  return (
    <Container maxWidth="sm">
      <Box marginY={4}>
        <form noValidate autoComplete="off">
          <TextField id="search" label="Search" variant="outlined" fullWidth />
        </form>
      </Box>
    </Container>
  );
}
