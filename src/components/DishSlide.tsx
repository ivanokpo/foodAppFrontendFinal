import React, { useEffect, useState, useRef} from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link} from 'react-router-dom';

 


const Popular = () => {

    const effectRan = useRef(false)
    const [popular, setPopular]= useState<DataObject | undefined[]>([]);
    const baseUrl = 'http://localhost:3001/recipes';  
    type DataObject = {
        id: string
        title: string
        image: string

    }[]

    useEffect(() => {
       
        if (!effectRan.current){
            const getPopular = async ()  => {
                const api = await fetch(`${baseUrl}/all`);
                const data = await api.json();
                localStorage.setItem('popular', JSON.stringify(data));
                console.log(data.data);
                setPopular(data.data);
                
                }
            getPopular()
            console.log("mount")
        }

        return () => {
          
            localStorage.clear()
                
                setPopular([]);
        }
        
    }, [])

    const handleDelete = async (id: string | undefined) => {
        console.log("delete");
        const url = `${baseUrl}/delete/${id}`
        fetch(url, {method: 'DELETE'}).then((response) => {
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            
            // assume things went well ^ 
        }).catch((e) => {console.log(e)});
    }

  return (
    <div>
                <Wrapper >
                    <h3>Saved Recipes</h3>

                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem'
                    }}>
                    {popular.map((recipe) => {
                        return(
                            <SplideSlide key={recipe?.id}>
                                
                            
                            <Card key={recipe?.id}> 
                            
                            
                            
                            <p key={recipe?.id}>{recipe?.title}</p>
                            
                            <img src={recipe?.image}  alt={recipe?.title} width="200" height="auto"/>
                            <Link to={'/recipes/' + recipe?.id}>
                                
                                <Gradient/> 
                            </Link>
                         
                            
                            </Card>

                            <DeleteButton onClick={() => handleDelete(recipe?.id)}>
                            <div>
                            
                            </div>
                            </DeleteButton>
                            
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

    margin: 0rem 0rem;
    
    border-radius: 30%;
    background-color: #ff0019;
    border: grey;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(255,117,10);
        color: #010606;
    }

    div {
        margin-top: 0rem;
        width: 0.7rem;
        height: 0.7rem;
        
    }
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