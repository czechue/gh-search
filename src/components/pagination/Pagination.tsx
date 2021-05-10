import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { PER_PAGE_RESULTS } from '../../common/consts/consts';
import MuiPagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';

type PaginationProps = {
  totalCount: number;
  size: 'small' | 'large';
};

const maxPossiblePage = 1000 / PER_PAGE_RESULTS;

export default function Pagination({ totalCount, size = 'small' }: PaginationProps): ReactElement {
  const router = useRouter();
  const calculatedMaxPages = Math.ceil(totalCount / PER_PAGE_RESULTS);
  const possibleToDisplayMaxPages = Math.min(calculatedMaxPages, maxPossiblePage);
  const defaultPage = Number(router.query?.['p']) || 1;

  const handleOnClick = (_, page) => {
    router.push({
      query: { ...router.query, p: page },
    });
  };

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