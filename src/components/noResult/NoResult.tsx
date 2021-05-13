import { Alert } from '@material-ui/lab';
import type { ReactElement } from 'react';
import React from 'react';

type NoResultProps = {
  readonly phrase?: string;
};
export default function NoResult({ phrase }: NoResultProps): ReactElement {
  return (
    <Alert severity="warning">
      No search results for <strong>{phrase}</strong> phrase.
    </Alert>
  );
}
