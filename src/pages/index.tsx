import React from 'react';

// components
import Repositories from '../components/repositories/Repositories';
import Main from '../layouts/Main';
import Pagination from '../components/pagination/Pagination';

// hooks
import useRepositories from '../common/api/useRepositories';

export default function Index({ query }) {
  const { data, isError, isLoading } = useRepositories({ query });

  if (isError) {
    return <Main>Error</Main>;
  }

  if (!data || isLoading) {
    return <Main>Loading</Main>;
  }

  return (
    <Main>
      {data.items.length > 0 ? (
        <>
          <Repositories results={data.items} />
          <Pagination totalCount={data.total_count} size="large" />
        </>
      ) : (
        <div>No results</div>
      )}
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
