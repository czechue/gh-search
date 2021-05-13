import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import type { ReactElement } from 'react';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '100%',
    marginTop: 50,
    padding: 10,
    margin: 10,
  },
}));

export default function Loader(): ReactElement {
  const classes = useStyles();
  return (
    <Skeleton variant="rect" width={890} height={1382} animation="wave" className={classes.root} />
  );
}
