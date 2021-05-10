import React from 'react';
import Repositories from '../components/repositories/Repositories';
import Main from '../layouts/Main';
import Pagination from '@material-ui/lab/Pagination';
import useRepositories from '../common/api/useRepositories';

export default function Index({ query }) {
  const { data, isError, isLoading } = useRepositories({ query });

  const handleOnClick = (e, page) => {
    console.log({ page, e });
  };

  if (!data) {
    return <Main>Loading</Main>;
  }

  return (
    <Main>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {data.items.length > 0 ? (
        <>
          {data.total_count}
          <Repositories results={data.items} />
          <Pagination count={10} onChange={handleOnClick} />
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
