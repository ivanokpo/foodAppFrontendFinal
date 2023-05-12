import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi"
import AddRecipe from "./components/AddRecipe"
import Navbar from "./components/Navbar";
import Cookbook from "./pages/Cookbook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/cookbook' exact component={Cookbook}/>
        <Route path='/category' exact component={Category}/>
      </Routes>
      {/* <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Culinery devours</Logo>
      </Nav> */} 
     <Search/> 
     <Border>
      <Pages/>
      </Border>
      </BrowserRouter>
    </div>
  );
}
const Border = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 10rem;
`
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
