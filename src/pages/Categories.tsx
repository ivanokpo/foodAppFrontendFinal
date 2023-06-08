import {TbSoup} from 'react-icons/tb';
import {FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiBowlOfRice} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBowlRice, faCheese } from '@fortawesome/free-solid-svg-icons'


import React from 'react'

//class where the different category icons are instantiated, 
//taking the user to their requested category of recipes
const Category = () => {
  return (
    <List>
        <SLink to={'/recipes/category/soup'}>
            <TbSoup/>
            <h4>Soup</h4>
        </SLink>
        <SLink to={'/recipes/category/burger'}>
            <FaHamburger/>
            <h4>Burgers</h4>
        </SLink>
        <SLink to={'/recipes/category/noodles'}>
            <GiNoodles/>
            <h4>Noodles</h4>
        </SLink >
        <SLink to={'/recipes/category/rice'}>
        <FontAwesomeIcon icon={faBowlRice} />
            <h4>Rice</h4>
        </SLink>
        <SLink to={'/recipes/category/pasta'}>
            <GiBowlOfRice/>
            <h4>Pasta</h4>
        </SLink>
        <SLink to={'/recipes/category/baked'}>
        <FontAwesomeIcon icon={faCheese} />
            <h4>Baked</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 7rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: initial;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;

    }

    svg {
        color: white;
        font-size: 1.5rem; 

    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057)
    }

`
export default Category
