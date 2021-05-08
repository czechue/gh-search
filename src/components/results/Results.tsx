import React, { ReactElement, useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';

import Table from './table/Table';

import makeData from './makeDate';

function Results(): ReactElement {
  const [data, setData] = useState([]);
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

  // const data = React.useMemo(() => makeData(20), []);

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react&page=0&per_page=5')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.items);
        setData(res.items);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Results;
