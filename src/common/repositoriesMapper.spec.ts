// import { MappedRepository, RawRepository } from './types/types';

// export default function repositoriesMapper(rawRepositories: RawRepository[]): MappedRepository[] {
//   return rawRepositories.map((repo) => {
//     return {
//       incomplete_results: repo.incomplete_results,
//       total_count: repo.total_count,
//       items: repo.items.map((item) => {
//         return {
//           name: item.name,
//           owner: item.owner.login,
//           stars: item.stargazers_count,
//           created_at: item.created_at,
//         };
//       }),
//     };
//   });
// }
