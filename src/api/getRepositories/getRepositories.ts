const PUBLIC_API_URL = 'https://api.github.com/search/repositories'

type GetRepositoriesProps = {
  query: string;
}

export default async function getRepositories({query}: GetRepositoriesProps) {
  const response = await fetch(PUBLIC_API_URL + `?q=${query}&page=0&per_page=5`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const json = await response.json();
  return json.items;
}