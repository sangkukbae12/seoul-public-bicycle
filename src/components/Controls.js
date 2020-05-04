import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import AutoCompleteInput from './AutoCompleteInput';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '24px',
    padding: '12px 24px',
    width: '172px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Controls() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <AutoCompleteInput />
    </Paper>
  );
}
