import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components'

const SearchResults = ({backendUrl}: {backendUrl: any}) => {

    //defined type for data object received when sending search request
    type DataObject = {
        id: string
        title: string
        image: string
        instructions: string
        ingredients: string
    
    }[]

    //state for the data recieved by the search input, when sent to the backend
    const [searchedRecipes, setSearchedRecipes] = useState<DataObject | undefined[]>([]);

    //variable which captures the parameters in the url
    let params = useParams();

    //method used to send get request to backend and recieve data on recipes which match the search request
    const getSearched = async () => {
        const data = await fetch(`${backendUrl}/searched/${params.search}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.data);
        console.log(recipes.data);
    }

    //calls the getSearched() method every time the component renders
    useEffect(() => {
        getSearched();
    });

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item?.id}>
                    <p>{item?.title}</p>
                    <Link to={'/recipes/'+ item?.id}>
                    <img src={item?.image} alt="" width="200" height="auto"/>
                    
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
    margin-left: 2rem;
    margin-right: 2rem;
`

const Card = styled.div`

overflow: hidden;
position: relative;

img{
    border-radius: 2rem;
    
    width: 100%;
    height: 45rem;
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
    font-size: 10rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    
}
`

export default SearchResults