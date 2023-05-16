import React, { useState } from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

function AddRecipe() {

  const [title, setTitle] = useState("");
  const [dishType, setDishType] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageLink, setImageLink] = useState("");
  const baseUrl = 'http://localhost:3001/recipes';
  const recipe = {title, dishType, instructions, ingredients, imageLink}

  const options = {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
      
    }
  }

  const handleSubmit = (e) => {
    
    
    //e.preventDefault();
    
    //console.log(recipe);
    fetch(baseUrl + '/add', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(recipe)
    }).then(() => {console.log(JSON.stringify(recipe).slice(1,-1))})
    

   //const resp = await axios.post(baseUrl + '/add', options);
  
  }

  return (
    <FormStyle>
      
        <h1>Add a new recipe to your cook book</h1>
        <p> Join Thousands of users in creating your own virtual sous-chef</p>
      

      <div>
        {/* title input field */}
        
        <div> 
        <input type="text" name="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>

        <div > 
        <input type="text" name="dishType" placeholder="Dish Type" value={dishType} onChange={e => setDishType(e.target.value)}></input>
        </div>

        <div > 
        <input type="text" name="instructions" placeholder="Instructions"  value={instructions} onChange={e => setInstructions(e.target.value)}></input>
        </div>

        <div> 
        <input type="text" name="ingredients" placeholder="Ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)}></input>
        </div>

        

        <button type="button" onClick={handleSubmit}>+</button>
      </div>

    </FormStyle>
  )
}
const FormStyle = styled.form`
    margin: 2rem 2rem;
    position: relative;
    width: 100%;
    justify-content: center;

    div {
      width: 50%;
      position: relative;
      padding: 0.5rem 0rem;
      
  }
    h1 {
      color: rgb(255,117,10);
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
      padding: 0.5rem 0rem;
      
    }
    
    input {
   
      background: linear-gradient(70deg, #DEDEDE, #A4A4A4);
      font-size: 1.5rem;
      
      padding: 1rem 0.7rem;
     
      border-style: none none none solid;
      border-radius: 1rem;
      border-color: rgb(255,117,10);
      border-width: 1rem;
      
      
      width: 100%;
      
      
  }

  button {
    background: linear-gradient(70deg, #DEDEDE, #A4A4A4);
    display: flex;
    justify-content: inherit;
    font-size: 1.5rem;
    color: rgb(255,117,10);
    text-align: center;
    padding: 0rem 4rem;
    
    border-style: solid;
    border-radius: 1rem;
    border-color: green;
    border-width: 0.2rem;
    margin: 0rem 1rem;
    
    width: 40%;
  }
   
`



export default AddRecipe;