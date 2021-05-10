import React, { ReactElement } from 'react';
import { CssBaseline } from '@material-ui/core';
import Table from './table/Table';
import { MappedItem } from '../../common/types/types';

type RepositoriesProps = {
  results: MappedItem[];
};

type Columns = {
  Header: string;
  accessor: keyof MappedItem;
};

function Repositories({ results }: RepositoriesProps): ReactElement {
  const columns: Columns[] = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Owner',
        accessor: 'owner',
      },
      {
        Header: 'Stars',
        accessor: 'stars',
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
