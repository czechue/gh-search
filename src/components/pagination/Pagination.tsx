import Box from '@material-ui/core/Box';
import MuiPagination from '@material-ui/lab/Pagination';
import type { ReactElement } from 'react';
import React from 'react';

import { usePagination } from './usePagination';

type PaginationProps = {
  readonly totalCount: number;
  readonly size?: 'small' | 'large';
};

export default function Pagination({ totalCount, size = 'small' }: PaginationProps): ReactElement {
  const { defaultPage, possibleToDisplayMaxPages, handleOnClick } = usePagination({ totalCount });

  return (
    <Box marginTop={2} display="flex" justifyContent="flex-end">
      <MuiPagination
        page={defaultPage}
        count={possibleToDisplayMaxPages}
        onChange={handleOnClick}
        size={size}
      />
    </Box>
  );
}
