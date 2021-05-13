import { Alert } from '@material-ui/lab';
import type { ReactElement } from 'react';
import React from 'react';

import Main from '../../layouts/Main';


export default function ErrorMessage(): ReactElement {
  return <Main>
    <Alert severity="error">Error occurred</Alert>
  </Main>
};
