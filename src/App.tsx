import Home from "./pages/Home";
import Category from "./pages/Categories";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from "./components/Search";
import Navbar from "./components/Navbar/index";
import Cookbook from "./pages/Cookbook";
import React from "react";
import DishType from "./components/CatResults";
import Searched from "./pages/SearchResults";
import Recipe from "./pages/Recipe";

const App = () => {

  //backend URL
  const backendUrl = process.env.REACT_APP_BACKEND_URL

  //search result URL
  const searchUrl = '/recipes/searched/';

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Search searchUrl={searchUrl}/> 
      <Routes>
        <Route path='/'  element={<Home backendUrl={backendUrl}/>}/>
        <Route path='/cookbook'  element={<Cookbook backendUrl={backendUrl}/>}/>
        <Route path='/category'  element={<Category/>}/>
        <Route path="/recipes/category/:dishType" element={<DishType backendUrl={backendUrl}/>}/>
        <Route path="/recipes/searched/:search" element={<Searched backendUrl={backendUrl}/>}/>
        <Route path="/recipes/:id" element={<Recipe backendUrl={backendUrl}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
