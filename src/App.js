import styled from "styled-components";
import { Normalize } from "styled-normalize";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Cart from "./pages/Cart";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap");
  background: linear-gradient(to right, #fc00ff, #00dbde);
  font-family: "Padauk", sans-serif;
  color: #444;
  min-height: 100vh;
`;

const Main = styled.main`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Router>
        <Normalize />
        <Navbar />
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Main>
      </Router>
    </Container>
  );
}

export default App;
