import {useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import React from 'react'

//method used to gather data on recipe and display data
const Recipe = ({backendUrl}: {backendUrl: any}) =>{
  //access to parameters of current url
  let params = useParams();
  
  //state for data recieved from backend
  const [details, setDetails] = useState<any>([]);

  //state which captures what tab is currently selected between instructions/ingredients
  //const [activeTab, setActiveTab] = useState<string>('instructions');

  //state which captues what tab is currently selected between
  const [editTab, setEditTab] = useState<string>('save');

  //state for the instructions and ingredients data
  const [instructions, setInstructions] = useState<string | null>("");
  const [ingredients, setIngredients] = useState<string | null>("");

  //each tabs data is defined here
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Instructions`,
      children: `${details.instructions}`,
    },
    {
      key: '2',
      label: `Ingredients`,
      children: `${details.ingredients}`,
    }
  ];


  //state for selected tab
  const [activeKey, setActiveKey] = useState(items[0].key)

  //fetch method which sends a get request for the details of a recipe based on its id
  const fetchDetails = async () => {
    const data = await fetch(backendUrl + `\\` + params.id)
    const detailData = await data.json();
    setDetails(detailData.data)
  };

  const onChange = (newActiveKey: string) => {
    console.log(`tab: `+ newActiveKey)
    setActiveKey(newActiveKey);
  };

  //calls the fetchDetails() method on render of the component
  useEffect( () => {
    fetchDetails();
  
  }, [])

  //called when either the edit or save tab is clicked
  const onSubmit = () => {
    
    setEditTab("save");

    //if statement where based on the state of the active tab, 
    //a put request is made to the backend in order to update the items 
    //information 
    if (activeKey === "1"){
      setInstructions(instructions)
      details.instructions = instructions
      console.log(details)
      fetch(backendUrl + '/update/' + params.id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(details)
    })
    .then(() => {
        console.log('instructions: ' + JSON.stringify(instructions).slice(1,-1)
        )})

  } else if (activeKey === "2"){
      details.ingredients = ingredients
      console.log(details)
      fetch(backendUrl + '/update/' + params.id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(details)
    })
    .then(() => {
      console.log(JSON.stringify(ingredients).slice(1,-1)
      )})

  }
  }
  
  return (
    <div>
      <Header>
        <h2>{details.title}</h2>
        <p>{details.dishType}</p>
      </Header>
      <DetailWrapper>
          <div>
            <img src={details.image} alt="" width="450" height="auto"/>
          </div>
          <Info >
            {
            //ternary operator which dictates the information displayed based on the state of the activeTab an editTab
            activeKey === "1" && editTab === "save" ? 
            (
              <div>     
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} activeKey={activeKey}/>
              </div>
            ) 
            : activeKey === "1" && editTab === "edit" ? 
            (
              <>
              <div className="textArea">
              <textarea data-type='text' value={instructions!} placeholder={details.instructions} maxLength= {2000} onChange={e => setInstructions(e.target.value)}></textarea>
              </div>
              </>
            ) 
            : activeKey === "2" && editTab === "save" ? 
            (
              
                <>
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} activeKey={activeKey}/>        
                </>
              
            ) 
            : activeKey === "2" && editTab === "edit" ? (
              
              <div className="textArea">
                <textarea data-type="text" value={ingredients!} placeholder={details.ingredients} maxLength= {2000} onChange={e => setIngredients(e.target.value)}></textarea>
              </div>
            ) 
            : (
              console.log("nothing selected!")
              )
              //end of ternary operator
            }
            <ButtonSection>
              <Button onClick={()=> setEditTab("edit")} shape={'round'} size={'large'} style={{
                marginRight: '1rem'
              }}> Edit </Button>
              <Button  onClick={()=> onSubmit()} shape={'round'} size={'large'} style={{
                marginRight: '1rem'
              }}> Save </Button>
              <Button  onClick={()=> setEditTab("save")} shape={'round'} size={'large'}> Cancel</Button>
            </ButtonSection>
            
          </Info>
    </DetailWrapper>
   
    </div>
  )
}

const Header : any = styled.div`
display: grid;
justify-content: center;
margin-bottom: 5rem;
p {
  text-align: center;
  color: grey;
}
`

const DetailWrapper : any = styled.div`
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
  
  overflow-wrap: break-word;
  
}


span {
  white-space: pre-wrap; 
  overflow-wrap: break-word; 
}


`


const Info : any = styled.div`
margin-top: 0rem;
margin-left: 10rem;

`

const ButtonSection : any = styled.div`
  margin-top: 1rem;
`


export default Recipe 