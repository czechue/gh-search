import type { Color } from '@material-ui/lab';
import { Alert } from '@material-ui/lab';
import type { ReactElement } from 'react';
import React from 'react';

type MessageProps = {
  readonly text: string;
  readonly severity: Color;
};

export default function Message({ text, severity }: MessageProps): ReactElement {
  return <Alert severity={severity}>{text}</Alert>;
}
