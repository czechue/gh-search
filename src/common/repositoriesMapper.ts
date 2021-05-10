import { MappedRepositories, RawRepositories } from './types/types';

export default function repositoriesMapper(res: RawRepositories): MappedRepositories {
  return {
    incomplete_results: res.incomplete_results,
    total_count: res.total_count,
    items: res.items.map((item) => {
      return {
        name: item.name,
        owner: item.owner.login,
        stars: item.stargazers_count,
        created_at: item.created_at,
      };
    }),
  };
}
