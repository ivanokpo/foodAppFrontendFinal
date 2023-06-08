import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'


//method gets the results of the requested category from the category icons
const CatResults = ({backendUrl}: {backendUrl: any}) =>  {
    type DataObject = {
        id: string
        title: string
        image: string

    }[]
    //state for the requested category recipe
    const [recipe, setRecipe] = useState<DataObject | undefined[]>([]);


    let params = useParams();

    //method for getting recipes based on requested dish type
    const getRecipe = async () => {
        const data = await fetch(`${backendUrl}/category/${params.dishType}`)
        console.log(data)
        const recipes = await data.json();
        setRecipe(recipes.data);
    }

    //method which calls getRecipe method every time the component is called
    useEffect(() => {
        getRecipe();
        
    }, []);

  return (
      <Grid>
      {recipe.map( (dish) => {
          return(
            <Card key={dish?.id}>
            <Link to={'/recipes/'+ dish?.id}>
            <img src={dish?.image} alt="" width="200" height="auto"/>
            <p>{dish?.title}</p>
            
            </Link>
        </Card>
               ) } )}
     </Grid>
    
  )
}

const Grid = styled(motion.div)`
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


export default CatResults;