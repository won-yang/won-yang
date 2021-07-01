import React from 'react';
import UnivSearchbar from 'components/UnivSearchbar';
import Header from 'components/Header';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <UnivSearchbar></UnivSearchbar>
    </>
  );
}

export default App;
