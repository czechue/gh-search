import type { ParsedUrlQuery } from 'querystring';

import type { GetServerSideProps } from 'next';
import React from 'react';

import useRepositories from '../common/api/useRepositories';
import Pagination from '../components/pagination/Pagination';
import Table from '../components/table/Table';
import Main from '../layouts/Main';

type IndexProps = {
  readonly query: ParsedUrlQuery;
}

export default function Index({ query }: IndexProps) {
  const { data, isError, isLoading } = useRepositories({ query });

  if (!query['q']) {
    return <Main>Use search to find repository</Main>
  }

  if (isLoading) {
    return <Main>Loading data</Main>;
  }

  if (!data) {
    return <Main>No results</Main>;
  }

  if (isError) {
    return <Main>Error</Main>;
  }


  return (
    <Main>
      {data.items.length > 0 ? (
        <React.Fragment>
          <Table results={data.items} />
          <Pagination totalCount={data.total_count} />
        </React.Fragment>
      ) : (
        <div>No results</div>
      )}
    </Main>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await,require-await
export const getServerSideProps: GetServerSideProps = async ({ query = {} }) => {
  return {
    props: {
      query,
    },
  };
}
