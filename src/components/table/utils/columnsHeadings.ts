/* eslint-disable functional/prefer-readonly-type */
import type { MappedItem } from '../../../common/types/types';

type Columns = {
  Header: string;
  accessor: keyof MappedItem;
};

export const columns: Columns[] = [
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
];
