import { useQuery } from 'react-query';
import getRepositories from './getRepositories';

export default function useRepositories({ query }) {
  return useQuery(['repos', { query }], () => getRepositories({ query: query['q'] }), {
    retry: 3,
  });
}