import React, { useEffect, useState} from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link} from 'react-router-dom';
import { Alert } from 'antd';


 

//class for home pages dish slide, showing saved recipes
const DishSlide = ({backendUrl}: {backendUrl: any}) => {
    
    //state for recipe data
    const [recipeData, setRecipeData]= useState<DataObject | undefined[]>([]);
    
    const [deleted,setDeleted] = useState<string | null >('no');

 

    //data object for recipe object recieved from backend
    type DataObject = {
        id: string
        title: string
        image: string

    }[]

    //method for getting recipes from backend 
    const getRecipes = async ()  => {
        const api = await fetch(`${backendUrl}/all`);
        const recipeBackendData = await api.json();
        localStorage.setItem('dishSlide', JSON.stringify(recipeBackendData));
        setRecipeData(recipeBackendData.data);
        }
    
    //method that calls the getRecipes() method every time the component renders
    useEffect(() => {
        getRecipes()
    }, [])

    //method to delete item from database, sending a delete http request
    const handleDelete = async (id: string | undefined) => {
        setDeleted('yes');
        const url = `${backendUrl}/delete/${id}`
        fetch(url, {method: 'DELETE'}).then((response) => {
            if(!response.ok){
                throw new Error('Something went wrong')
            }
        }).catch((e) => {console.log(e)});
        window.location.reload();



    }

  return (
      <>
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
                    {recipeData.map((recipe) => {
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
                            <div className="deleteIcon">
                            </div>
                            </DeleteButton>
                            </SplideSlide>
                        )
                    })}
                    </Splide>
                </Wrapper>
    </div>
    {deleted === 'yes' ? (<Alert message="Recipe deleted!" type="error" />) : (<></>)}
    </>
  )
}

const Wrapper = styled.div`
    padding: 1rem;
`

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
export default DishSlide