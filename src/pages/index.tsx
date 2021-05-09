import React from 'react';
import getRepositories from '../api/getRepositories/getRepositories';
import { useQuery } from 'react-query';

import Header from '../components/header/Header';
import Repositories from '../components/repositories/Repositories';
import Search from '../components/search/Search';
import Main from '../layouts/main/Main';
import Pagination from '@material-ui/lab/Pagination';

export default function Index({ query }) {
  const { data = [], isError, isLoading } = useQuery(
    ['repos', { query }],
    () => getRepositories({ query: query['q'] }),
    {
      retry: 3,
    },
  );

  const handleOnClick = (e, page) => {
    console.log({ page, e });
  };

  return (
    <Main>
      <Header />
      <Search />
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {data.length === 0 && <div>No results</div>}
      <Repositories results={data} />
      <Pagination count={10} onChange={handleOnClick} />
    </Main>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      query,
    },
  };
}
