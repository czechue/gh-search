/* eslint-disable functional/prefer-readonly-type */
import {
  Table as MaUTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import type { ReactElement } from 'react';
import React from 'react';

import type { MappedItem } from '../../common/types/types';

import { useSortColumn } from './utils/useSortColumn';
import useTable from './utils/useTable';

type TableProps = {
  results: MappedItem[];
};

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 50,
    padding: 10,
    margin: 10,
  }
}));

export default function Table({ results: data }: TableProps): ReactElement {
  const classes = useStyles()
  const { handleOnClickHeader } = useSortColumn();
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({ data });

  if (data.length === 0) {
    return null;
  }

  return (
    <Paper className={classes.root}>
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleOnClickHeader(column)}
                    onKeyDown={() => handleOnClickHeader(column)}
                  >
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </Paper>
  );
}
