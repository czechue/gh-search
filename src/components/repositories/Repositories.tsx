import React, { ReactElement } from 'react';
import { CssBaseline } from '@material-ui/core';
import Table from './table/Table';

type RepositoriesProps = {
  results: any;
};

function Repositories({ results }: RepositoriesProps): ReactElement {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Owner',
        accessor: 'default_branch',
      },
      {
        Header: 'Stars',
        accessor: 'stargazers_count',
      },
      {
        Header: 'Created At',
        accessor: 'created_at',
      },
    ],
    [],
  );

  return (
    <div>
      <CssBaseline />
      <Table columns={columns} data={results} />
    </div>
  );
}

export default Repositories;
