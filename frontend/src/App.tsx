import './App.css';
import styled from 'styled-components';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { LandingPage, MainPage, PostDetailPage, PostWritePage } from './pages';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/main" component={MainPage}></Route>
          <Route path="/view" component={PostDetailPage}></Route>
          <Button>HELLO</Button>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Button = styled.button`
  background-color: ${(props) => props.theme.bgColors.primary};
`;
