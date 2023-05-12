import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

function Navbar() {
  return (
    <>
       <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
            
                <NavLink to="/cookbook" activeStyle>
                    Cookbook
                </NavLink>
                <NavLink to="/category" activeStyle>
                    Category
                </NavLink>
                
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/signin'>Sign in</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar