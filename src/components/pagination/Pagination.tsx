import React, { ReactElement } from 'react';
import { PER_PAGE_RESULTS } from '../../common/consts/consts';
import MuiPagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';

type PaginationProps = {
  totalCount: number;
  size: 'small' | 'large';
};

const maxPossiblePage = 1000 / PER_PAGE_RESULTS;

export default function Pagination({ totalCount, size = 'small' }: PaginationProps): ReactElement {
  const router = useRouter();
  const calculatedMaxPages = Math.ceil(totalCount / PER_PAGE_RESULTS);
  const possibleToDisplayMaxPages = Math.min(calculatedMaxPages, maxPossiblePage);

  const handleOnClick = (_, page) => {
    router.push({
      query: { ...router.query, p: page },
    });
  };

  return (
    <Box marginTop={2} display="flex" justifyContent="flex-end">
      <MuiPagination count={possibleToDisplayMaxPages} onChange={handleOnClick} size={size} />
    </Box>
  );
}
