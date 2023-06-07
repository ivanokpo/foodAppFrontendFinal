import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components'

function Searched() {
    type DataObject = {
        id: string
        title: string
        image: string
        instructions: string
        ingredients: string
    
    }[]

    
      
    const [searchedRecipes, setSearchedRecipes] = useState<DataObject | undefined[]>([]);
    let params = useParams();
    
    const backendUrl = 'http://localhost:3001/recipes/searched'
    const getSearched = async () => {
        const data = await fetch(`${backendUrl}/${params.search}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.data);
        console.log(recipes.data);
    }

    useEffect(() => {
        getSearched();
        //params.search
    });

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item?.id}>
                    <Link to={'/recipes/'+ item?.id}>
                    <img src={item?.image} alt="" width="200" height="auto"/>
                    <h4>{item?.title}</h4>
                    {/* <p key={item.ingredients.id}>{item.ingredients}</p> */}
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`

    img {
        width: 40%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`

export default Searched