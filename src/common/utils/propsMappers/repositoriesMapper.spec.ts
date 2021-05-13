import type { RawRepositories } from '../../types/types';

import repositoriesMapper from './repositoriesMapper';

const mockedRepositorie = ({
  total_count: 2065974,
  incomplete_results: false,
  items: [
    {
      created_at: '2015-06-09T19:25:38Z',
      name: 'react-native-web',
      owner: {
        login: 'necolas',
      },
      stargazers_count: 18709,
    },
    {
      created_at: '2015-06-09T19:25:38Z',
      name: 'ReactiveObjC',
      owner: {
        login: 'ReactiveCocoa',
      },
      stargazers_count: 2378,
    },
    {
      name: 'react-loadable',
      owner: {
        login: 'jamiebuilds',
      },
      stargazers_count: 15951,
      created_at: '2017-03-09T18:41:17Z',
    },
  ],
} as unknown) as RawRepositories;

const expected = {
  incomplete_results: false,
  items: [
    {
      created_at: '2015/06/09',
      name: 'react-native-web',
      owner: 'necolas',
      stars: 18709,
    },
    {
      created_at: "2015/06/09",
      name: 'ReactiveObjC',
      owner: 'ReactiveCocoa',
      stars: 2378,
    },
    {
      created_at: '2017/03/09',
      name: 'react-loadable',
      owner: 'jamiebuilds',
      stars: 15951,
    },
  ],
  total_count: 2065974,
};

describe('repositoriesMapper', () => {
  it('should map API repositories response correctly', () => {
    const result = repositoriesMapper(mockedRepositorie);

    expect(result).toStrictEqual(expected);
  });
});
