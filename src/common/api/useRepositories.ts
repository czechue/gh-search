import type { ParsedUrlQuery } from 'querystring';

import { useQuery } from 'react-query';

import getRepositories from './getRepositories';

type UseRepositories = {
  readonly query: ParsedUrlQuery;
};

export default function useRepositories({ query }: UseRepositories) {
  return useQuery(
    ['repos', { query }],
    () =>
      getRepositories({
        query: query['q'] as string,
        page: query['p'] as string,
      }),
    {
      retry: 3,
    },
  );
}
