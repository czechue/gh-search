import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import type { HeaderGroup } from 'react-table';

type UseSortColumn = {
  readonly handleOnClickHeader: ({ id, isSortedDesc, isSorted }: HeaderGroup<object>) => void;
};

export function useSortColumn(): UseSortColumn {
  const router = useRouter();
  const handleOnClickHeader = useCallback(
    ({ id, isSortedDesc, isSorted }: HeaderGroup<object>) => {
      if (!isSorted && !isSortedDesc) {
        void router.push({
          query: {
            ...router.query,
            sort: id,
            desc: false,
          },
        });
      }

      if (isSorted && !isSortedDesc) {
        void router.push({
          query: {
            ...router.query,
            sort: id,
            desc: true,
          },
        });
      }

      if (isSorted && isSortedDesc) {
        void router.push({
          query: {
            p: router.query['p'] || '0',
            q: router.query['q'],
          },
        });
      }
    },
    [router],
  );

  return useMemo(
    () => ({
      handleOnClickHeader,
    }),
    [handleOnClickHeader],
  );
}
