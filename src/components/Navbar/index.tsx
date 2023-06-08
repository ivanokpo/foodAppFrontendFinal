import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import { GiCook } from "react-icons/gi";
const Navbar = () => {
  //Navbar component which returns the navbar along with the three different main pages
  //Home, Cookbook and Categories
  //The three pages are navlinks which redirect you to the pages
  return (
    <>
      <Nav>
        <NavLink to="/">
          <GiCook size={88} /> Home
        </NavLink>

        <NavLink to="/cookbook">Cookbook</NavLink>
        <NavLink to="/category">Categories</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
