import React, { ReactElement } from 'react';
import { Table as MaUTable, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Column, useTable } from 'react-table';
import { MappedItem } from '../../../common/types/types';

type TableProps = {
  columns: Column[];
  data: MappedItem[];
};

export default function Table({ columns, data }: TableProps): ReactElement {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  if (data.length === 0) {
    return null;
  }

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
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
