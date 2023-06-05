import Home from "./pages/Home";
//import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from "./components/Search";
//import styled from "styled-components";
import Navbar from "./components/Navbar/index";
import Cookbook from "./pages/Cookbook";
import React from "react";
import DishType from "./pages/DishType";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Search/> 
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/cookbook'  element={<Cookbook/>}/>
        <Route path='/category'  element={<Category/>}/>
        <Route path="/recipes/category/:dishType" element={<DishType/>}/>
        <Route path="/recipes/searched/:search" element={<Searched/>}/>
        <Route path="/recipes/:id" element={<Recipe/>}/>
      </Routes>
      {/* <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Culinery devours</Logo>
      </Nav> */} 
     
     {/* <Border>
      <Pages/>
      </Border> */}
      </BrowserRouter>
    </div>
  );
}

// const Logo = styled(Link)`
//   text-decoration: none;
//   font-size: 1.5rem;
//   font-weight: 400;
//   font-family: 'Lobster Two', cursive;
// `
// const List = styled.div`
//     display: flex;
//     flex-direction: reverse;
//     justify-content: space-a;
//     margin: 0rem 0rem;
// `
// const Nav = styled.div`
//   padding: 4rem 0rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   svg {
//     font-size: 2rem
//   }
// `

export default App;
