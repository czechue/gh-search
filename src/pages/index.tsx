import React from 'react';

import Header from '../components/header/Header';
import Results from '../components/results/Results';
import Search from '../components/search/Search';
import Main from '../layouts/main/Main';

export default function Index() {
  return (
    <Main>
      <Header />
      <Search />
      <Results />
    </Main>
  );
}
