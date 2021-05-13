import type { ParsedUrlQuery } from 'querystring';

import { Alert } from '@material-ui/lab';
import type { GetServerSideProps } from 'next';
import React from 'react';

import useRepositories from '../common/api/useRepositories';
import ErrorMessage from '../components/error/Error';
import Loader from '../components/loader/Loader';
import NoResult from '../components/noResult/NoResult';
import Pagination from '../components/pagination/Pagination';
import Table from '../components/table/Table';
import Main from '../layouts/Main';

type IndexProps = {
  readonly query: ParsedUrlQuery;
};

export default function Index({ query }: IndexProps) {
  const { data, isError, isLoading } = useRepositories({ query });
  const searchPhrase = query['q'] as string;

  if (!searchPhrase) {
    return (
      <Main>
        <Alert severity="info">Use search to find repository</Alert>
      </Main>
    );
  }

  if (isLoading) {
    return (
      <Main>
        <Loader />
      </Main>
    );
  }

  if (!data) {
    return (
      <Main>
        <NoResult phrase={searchPhrase} />
      </Main>
    );
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Main>
      {data.items.length > 0 ? (
        <React.Fragment>
          <Table results={data.items} />
          <Pagination totalCount={data.total_count} />
        </React.Fragment>
      ) : (
        <NoResult phrase={searchPhrase} />
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
};
