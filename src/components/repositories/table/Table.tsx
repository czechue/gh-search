/* eslint-disable functional/prefer-readonly-type */
import { Table as MaUTable, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import React, { useMemo } from 'react';
import type { Column } from 'react-table';
import { useTable, useSortBy } from 'react-table';

import type { MappedItem } from '../../../common/types/types';

import { useSortColumn } from './useSortColumn';

type TableProps = {
  columns: Column<object>[];
  data: MappedItem[];
};

export default function Table({ columns, data }: TableProps): ReactElement {
  const router = useRouter();
  const {handleOnClickHeader} = useSortColumn()
  const getInitialState = useMemo(
    () => ({
      sortBy: [
        {
          id: router.query['sort'] as string,
          desc: router.query['desc'] === 'true',
        },
      ],
    }),
    [router],
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: getInitialState,
    },
    useSortBy,
  );

  if (data.length === 0) {
    return null;
  }

  return (
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
        {rows.map((row, i) => {
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
  );
}
