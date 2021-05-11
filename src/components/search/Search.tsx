import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router';
import type { FormEventHandler, ChangeEventHandler } from 'react';
import React, { useState } from 'react';

export default function Search() {
  const router = useRouter();
  const [phrase, setPhrase] = useState(router.query['q']);
  const [validationError, setValidationError] = useState('');

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setValidationError('');
    if (!phrase) {
      setValidationError('Fill the field');
      return;
    }

    void router.push({
      query: { q: phrase },
    });
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValidationError('');
    setPhrase(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box marginY={4}>
        <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
          <TextField
            onChange={handleOnChange}
            defaultValue={router.query['q'] || ''}
            id="search"
            label="Search"
            variant="outlined"
            fullWidth
            error={!!validationError}
            helperText={validationError}
          />
        </form>
      </Box>
    </Container>
  );
}
