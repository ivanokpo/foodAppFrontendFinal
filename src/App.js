import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi"
import AddRecipe from "./components/AddRecipe"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Culinery devours</Logo>
      </Nav>
      <div class="grid-container">
        
      <div class="grid-item"><Search/></div>
     
      
      </div>
      <Category/>
      <div class="grid-item"><AddRecipe/></div>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const List = styled.div`
    display: flex;
    flex-direction: reverse;
    justify-content: space-a;
    margin: 0rem 0rem;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem
  }
`

export default App;
