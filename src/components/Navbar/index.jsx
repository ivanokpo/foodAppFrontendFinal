import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {GiCook} from 'react-icons/gi'
function Navbar() {
  return (
    <>
       <Nav>
            <NavLink to="/">
                <GiCook size={88}/>  Home
            </NavLink>
            
                <NavLink to="/cookbook" activeStyle>
                    Cookbook
                </NavLink>
                <NavLink to="/category" activeStyle>
                    Category
                </NavLink>
                
            
            
        </Nav>
    </>
  )
}

export default Navbar