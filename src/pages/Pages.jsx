import React from "react";
import Home from "./Home";
import {Route, Routes, BrowserRouter, useLocation} from 'react-router-dom'
import DishType from "./DishType";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import Cookbook from "./Cookbook";
import Category from "../components/Category";
const Pages = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:3001/recipes'
  return (
    <AnimatePresence exitBeforeEnter>  
    <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/cookbook" element={<Cookbook/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/recipes/category/:dishType" element={<DishType/>}/>
        <Route path="/recipes/searched/:search" element={<Searched/>}/>
        <Route path="/recipes/:id" element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
    
  )
}

export default Pages