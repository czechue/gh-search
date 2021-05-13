import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

import { PER_PAGE_RESULTS } from '../../common/consts/consts';

const maxPossiblePage = 1000 / PER_PAGE_RESULTS;

type UsePagination = {
  readonly totalCount: number;
};

export function usePagination({ totalCount }: UsePagination) {
  const router = useRouter();
  const calculatedMaxPages = Math.ceil(totalCount / PER_PAGE_RESULTS);
  const possibleToDisplayMaxPages = Math.min(calculatedMaxPages, maxPossiblePage);
  const defaultPage = Number(router.query?.['p']) || 1;

  const handleOnClick = useCallback(
    (_, page: number) => {
      void router.push({
        query: { ...router.query, p: page },
      });
    },
    [router],
  );

  return useMemo(
    () => ({
      defaultPage,
      possibleToDisplayMaxPages,
      handleOnClick,
    }),
    [defaultPage, handleOnClick, possibleToDisplayMaxPages],
  );
}
