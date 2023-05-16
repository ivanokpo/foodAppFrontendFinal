import {useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState('instructions');
  const [editTab, setEditTab] = useState('save');
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [id, setId] = useState()
  const [recipeObject, setRecipeObject] = useState("");
  const recipe = {instructions, id}

  const baseUrl = 'http://localhost:3001/recipes';

  const fetchDetails = async () => {
    const data = await fetch(`http://localhost:3001/recipes/${params.id}`)
    const detailData = await data.json();
    
   
    setDetails(detailData.data)
    //console.log(detailData)

  };

  console.log(details)

  useEffect( () => {
    fetchDetails();
  }, [params.id])

  const onSubmit = (recipeObject) => {
    setEditTab("save");
   // setId(params.id);

   if (activeTab === "instructions"){
    details.instructions = instructions
    console.log(details)
    //console.log("instructions: " + instructions)
    fetch(baseUrl + '/update/' + params.id, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(details)
    }).then(() => {console.log(JSON.stringify(instructions).slice(1,-1))})

  } else if (activeTab === "ingredients"){

    details.ingredients = ingredients
    console.log(details)
    //console.log("instructions: " + instructions)
    fetch(baseUrl + '/update/' + params.id, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(details)
    }).then(() => {console.log(JSON.stringify(ingredients).slice(1,-1))})

  }
  }
  
  return (
    <div>
      <DetailWrapper>
      <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" width="350" height="auto"/>
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={()=> setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>
        {
        activeTab === "instructions" && editTab === "save" ? (
          <div>     
          <p>{details.instructions}</p>
        </div>
        ) : activeTab === "instructions" && editTab === "edit" ? (
        <>
        
        <div>
        <textarea type="text" value={instructions} placeholder={details.instructions} maxLength= "2000" onChange={e => setInstructions(e.target.value)}></textarea>
       </div>
        
        </>
        ) 
        : 
        activeTab === "ingredients" && editTab === "save" ? (
          
          <div>
          <p>{details.ingredients}</p>
          {/* {details.ingredients.map((ingredient)=> {
            return <p key={ingredient.id}>- {ingredient.name}</p>
            
          })} */}
          {console.log(details.ingredients)}
          
          
        
          </div>
        ) : activeTab === "ingredients" && editTab === "edit" ? (
          
          <div>
            <textarea type="text" value={ingredients} placeholder={details.ingredients} maxLength= "2000" onChange={e => setIngredients(e.target.value)}></textarea>
            
        {/* <form>
       
          {details.ingredients.map((ingredient)=> {
          return <input type="text" value={ingredient.name} />
        })}
        
        </form> */}
      
        </div>
        ) : (console.log("hi fe"))}
        <br/>
        <Button className={editTab === "edit" ? "active" : ""} onClick={()=> setEditTab("edit")}>Edit</Button>
        <Button className={editTab === "save" ? "active" : ""} onClick={()=> onSubmit()}>Save</Button>
        
      </Info>
    </DetailWrapper>
 
    
    </div>
  )
}

const DetailWrapper = styled.div`
margin-top: 1rem;
margin-bottom: 5rem;
display: flex;
.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}
h2{
  margin-bottom: 2rem;
}
li {
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul {
  margin-top: 2rem;
}

textarea {
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  width: 300px;
  height: 150px;
  resize: none;
  
}
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

`

const Info = styled.div`
margin-left: 10rem;
div {
  margin-top: 2rem;
}
`

// const FormStyle = styled.form`
//     margin: 2rem 2rem;
//     position: relative;
//     width: 100%;
//     justify-content: center;

//     div {
//       width: 50%;
//       position: relative;
//       padding: 0.5rem 0rem;
      
//   }
//     h1 {
//       color: rgb(255,117,10);
//       font-size: 3rem;
//     }
//     p {
//       font-size: 1rem;
//       padding: 0.5rem 0rem;
      
//     }
    
//     input {
   
//       background: linear-gradient(70deg, #DEDEDE, #A4A4A4);
//       font-size: 1.5rem;
      
//       padding: 1rem 0.7rem;
     
//       border-style: none none none solid;
//       border-radius: 1rem;
//       border-color: rgb(255,117,10);
//       border-width: 1rem;
      
      
//       width: 100%;
      
      
//   }

//   button {
//     background: linear-gradient(70deg, #DEDEDE, #A4A4A4);
//     display: flex;
//     justify-content: inherit;
//     font-size: 1.5rem;
//     color: rgb(255,117,10);
//     text-align: center;
//     padding: 0rem 4rem;
    
//     border-style: solid;
//     border-radius: 1rem;
//     border-color: green;
//     border-width: 0.2rem;
//     margin: 0rem 1rem;
    
//     width: 40%;
//   }
   
// `
export default Recipe