import React from 'react';
import UnivSearchbar from 'components/UnivSearchbar';
import Header from 'components/Header';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header></Header>
      <UnivSearchbar></UnivSearchbar>
    </Router>
  );
}

export default App;
