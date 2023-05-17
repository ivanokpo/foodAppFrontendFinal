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
      <Header>
      <h2>{details.title}</h2>
      </Header>
      <DetailWrapper>
     <div>
      
      <img src={details.image} alt="" width="450" height="auto"/>
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={()=> setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>
        {
        activeTab === "instructions" && editTab === "save" ? (
          <div>     
          <span>{details.instructions}</span>
        </div>
        ) : activeTab === "instructions" && editTab === "edit" ? (
        <>
        
        <div className="textArea">
        <textarea type="text" value={instructions} placeholder={details.instructions} maxLength= "2000" onChange={e => setInstructions(e.target.value)}></textarea>
       </div>
        
        </>
        ) 
        : 
        activeTab === "ingredients" && editTab === "save" ? (
          
          <div>
          <span>{details.ingredients}</span>
          {/* {details.ingredients.map((ingredient)=> {
            return <p key={ingredient.id}>- {ingredient.name}</p>
            
          })} */}
          {console.log(details.ingredients)}
          
          
        
          </div>
        ) : activeTab === "ingredients" && editTab === "edit" ? (
          
          <div className="textArea">
            <textarea type="text" value={ingredients} placeholder={details.ingredients} maxLength= "2000" onChange={e => setIngredients(e.target.value)}></textarea>
        </div>
        ) : (console.log("hi fe"))}
        <br/>
        
        <UpdateButtons  onClick={()=> setEditTab("edit")}>Edit</UpdateButtons>
        <UpdateButtons  onClick={()=> onSubmit()}>Save</UpdateButtons>
        
        
      </Info>
    </DetailWrapper>
 
    
    </div>
  )
}

const Header = styled.div`
display: grid;
justify-content: center;
margin-bottom: 5rem;
`

const DetailWrapper = styled.div`
margin-top: 3rem;
margin-left: 8rem;

display: flex;

justify-content: center;

.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}

h2{
 
  text-align: left;
  font-size: 30px; 
}

img {
  border-radius: 1.5rem;
}
li {
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul {
  margin-top: 2rem;
}

button:active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}


textarea {
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 1.5rem;
  font-weight: 600;
  width: 380px;
  height: 250px;
  resize: none;
  white-space: pre;
overflow-wrap: break-word;
  
}


span {
  white-space: pre-wrap; 
  overflow-wrap: break-word; 
}


`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  justify-content: center;
  margin-right: 0.7rem;
  border-radius: 1.5rem;
 
  font-weight: 600;
  font-size: 20px;
  
  
  

`
const UpdateButtons = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  display: inline;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10rem;
`

const Info = styled.div`
margin-top: 0rem;
margin-left: 10rem;
justify-content: center;

div {
  margin-top: 2rem;
  
  
}


`


export default Recipe