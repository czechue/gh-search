import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import useSearch from './useSearch';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  iconButton: {
    padding: 10,
    position: 'absolute',
    right: 12,
  },
}));

export default function Search() {
  const classes = useStyles();
  const { handleOnSubmit, handleOnChange, validationError, defaultValue } = useSearch();

  return (
    <Container maxWidth="sm">
      <Box marginY={4}>
        <form noValidate autoComplete="off" onSubmit={handleOnSubmit} className={classes.root}>
          <TextField
            onChange={handleOnChange}
            defaultValue={defaultValue}
            id="search"
            label="Search"
            variant="outlined"
            fullWidth
            error={!!validationError}
            helperText={validationError}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      </Box>
    </Container>
  );
}
