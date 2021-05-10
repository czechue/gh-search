import { PER_PAGE_RESULTS } from '../consts/consts';
import repositoriesMapper from '../repositoriesMapper';
import { MappedRepositories } from '../types/types';

// api's domain should be get from ENVs:
const PUBLIC_API_URL = 'https://api.github.com/search/repositories';

type GetRepositoriesProps = {
  query: string;
  page: string;
};

export default async function getRepositories({
  query,
  page,
}: GetRepositoriesProps): Promise<MappedRepositories> {
  const response = await fetch(
    PUBLIC_API_URL + `?q=${query}&page=${page}&per_page=${PER_PAGE_RESULTS}`,
  );

  // a bit simplified fetch error handling
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const json = await response.json();
  return repositoriesMapper(json);
}
