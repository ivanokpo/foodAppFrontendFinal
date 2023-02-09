import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link, useParams, useNavigate} from 'react-router-dom';
import {RxCross2} from 'react-icons/rx';

const Popular = () => {

    const [popular, setPopular]= useState([]);
    const baseUrl = 'http://localhost:3001/recipes';
    const navigate = useNavigate();

    useEffect(() => {
        getPopular();
    }, [])


    const getPopular = async () => {

        // const check = localStorage.getItem('popular');
        // if (check){
        //     setPopular(JSON.parse(check));
        // } else {
            
        
        const api = await fetch(`${baseUrl}/all`);
        
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data));
        console.log(data)
        setPopular(data)
        //}
    }

    const handleDelete = async (id) => {
        console.log("delete");
        const url = `${baseUrl}/delete/${id}`
        const fetchDelete = fetch(url, {method: 'DELETE'}).then((response) => {
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            
            // assume things went well ^ 
        }).catch((e) => {console.log(e)});
    }

  return (
    <div>
                <Wrapper >
                    <h3>Chef's Picks</h3>

                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem'
                    }}>
                    {popular.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                            <DeleteButton onClick={(e) => handleDelete(recipe.id)}>
                            <RxCross2/>
                            </DeleteButton>
                            <Card key={recipe.id}> 
                            
                            <p key={recipe.id}>{recipe.title}</p>
                            
                            <img src={recipe.image}  alt={recipe.title} width="200" height="auto"/>
                            <Link to={'/recipes/' + recipe.id}>
                                
                                <Gradient/> 
                            </Link>
                         
                            
                            </Card>
                            </SplideSlide>
                        )
                    })}
                    </Splide>
                </Wrapper>
            
        
    </div>
  )
}

const Wrapper = styled.div`margin: 4rem 0rem`

const DeleteButton = styled.button`

    margin: 1rem 0rem;
    
    
    `
    
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
export default Popular