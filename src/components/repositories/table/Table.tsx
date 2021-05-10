import React, { ReactElement, useCallback } from 'react';
import { Table as MaUTable, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Column, useTable, useSortBy } from 'react-table';
import { MappedItem } from '../../../common/types/types';

type TableProps = {
  columns: Column[];
  data: MappedItem[];
};

export default function Table({ columns, data }: TableProps): ReactElement {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: 'owner',
            desc: false,
          },
        ],
      },
    },
    useSortBy,
  );

  const handleOnClickHeader = useCallback((column) => {
    console.log(column);
  }, []);

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
                <div onClick={() => handleOnClickHeader(column)}>
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
