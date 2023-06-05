import React from 'react'
import { Nav, NavLink} from './NavbarElements'
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