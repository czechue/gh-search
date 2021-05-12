/* eslint-disable functional/prefer-readonly-type */
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useSortBy, useTable as useReactTable } from 'react-table';

import type { MappedItem } from '../../../common/types/types';

import { columns } from './columnsHeadings';

type UseTable = {
  data: MappedItem[];
};

export default function useTable({ data }: UseTable) {
  const router = useRouter();
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
  const { getTableProps, headerGroups, rows, prepareRow } = useReactTable(
    {
      columns,
      data,
      initialState: getInitialState,
    },
    useSortBy,
  );

  return useMemo(
    () => ({
      getTableProps,
      headerGroups,
      rows,
      prepareRow,
    }),
    [getTableProps, headerGroups, prepareRow, rows],
  );
}
