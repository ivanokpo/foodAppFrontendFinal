import React from 'react'
import { Nav, NavLink} from './NavbarElements.js'
import {GiCook} from 'react-icons/gi'
function Navbar() {
  return (
    <>
       <Nav>
            <NavLink to="/">
                <GiCook size={88}/>  Home
            </NavLink>
            
                <NavLink to="/cookbook" >
                    Cookbook
                </NavLink>
                <NavLink to="/category" >
                    Category
                </NavLink>
                
            
            
        </Nav>
    </>
  )
}

export default Navbar