import {useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState('instructions');

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

  
  return (
    <div>
      <DetailWrapper>
      <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" width="350" 
     height="auto"/>
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={()=> setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === "instructions" && (
          <div>
          
          <p>{JSON.stringify(details.instructions)}</p>
          <br/>
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={()=> setActiveTab("instructions")}>Edit</Button>
          {/* on click make the p turn into the input below, 
          then a submit button which sends the changed information to backend in PUT method, 
          it will need the id of object to change 
          use same method from the instructions/ingredients button as edit/save
          edit = <input>
          save = <p> & send info to PUT method
          */}
          {/* <input type="text" value={JSON.stringify(details.instructions)}/> */}
         

        </div>
        ) }
        {activeTab === "ingredients" && (
          <div>
          {details.ingredients.map((ingredient)=> {
            return <p key={ingredient.id}>- {ingredient.name}</p>
            
          })}
          {console.log(details.ingredients)}

          
          
          </div>
        )}
        
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
export default Recipe