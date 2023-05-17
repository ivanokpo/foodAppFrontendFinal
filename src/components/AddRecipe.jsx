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

        

        <button type="button" onClick={handleSubmit}>Save</button>
      </div>

    </FormStyle>
  )
}
const FormStyle = styled.form`
    margin: 0rem 2rem;
    position: relative;
    width: 100%;
    justify-content: center;

    div {
      width: 50%;
      position: relative;
      padding: 0.5rem 0rem;
      
  }
    h1 {
      color: rgb(83,83,83);
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
      border: 2px solid black;
      border-color: rgb(83,83,83);
      border-radius: 1.5rem;
     
      width: 100%;

     
      color: #313131;
      background: light-grey;
      
      font-weight: 600;
    
      resize: none;
      white-space: pre;
      overflow-wrap: break-word;
      
      
      
  }

  button {
    background: green;
    font-size: 1rem;   
    padding: 1rem 0.7rem;
    border-style: none none none none;
    
    
    margin-left: 5.5rem;
    border-radius: 1rem;
    margin-top: 0.5rem;

   
    color: white;
    
    
    font-weight: 600;
  
    resize: none;
    white-space: pre;
    overflow-wrap: break-word;
    width: 20%;
  }

  button:active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
   
`



export default AddRecipe;