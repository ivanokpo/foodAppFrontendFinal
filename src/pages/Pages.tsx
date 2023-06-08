import React from "react";
import Home from "./Home";
import {Route, Routes, useLocation} from 'react-router-dom'
import CatResults from "../components/CatResults";
import Searched from "./SearchResults";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import Cookbook from "./Cookbook";
import Categories from "./Categories";

const Pages = ({backendUrl}: {backendUrl: any}) => {
  
  //use this variable to get the current url address
  const location = useLocation();
  
  return (
    <AnimatePresence exitBeforeEnter>  
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home backendUrl={backendUrl}/>}/>
        <Route path="/cookbook" element={<Cookbook backendUrl={backendUrl}/>}/>
        <Route path="/category" element={<Categories/>}/>
        <Route path="/recipes/category/:dishType" element={<CatResults backendUrl={backendUrl}/>}/>
        <Route path="/recipes/searched/:search" element={<Searched backendUrl={backendUrl}/>}/>
        <Route path="/recipes/:id" element={<Recipe backendUrl={backendUrl}/>}/>
    </Routes>
    </AnimatePresence>
    
  )
}

export default Pages