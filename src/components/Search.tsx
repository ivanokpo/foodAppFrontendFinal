import React from 'react'
//import styled from 'styled-components';
import {useState} from 'react';
//import {FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {  Form, Input} from 'antd';

//class where the search logic is developed
const Search = ({searchUrl}: {searchUrl: any}) => {
  
    //state for input in searchbar
    const [input, setInput] = useState<string | null>("");
    const navigate = useNavigate();

    //Input instantiated as Search
    const { Search } = Input;

    //method for when the search bar is pressed, triggering a search in the database
    const onSearch = (value: string) => {
      const searchInput = value.toLowerCase()
        setInput(searchInput)
        console.log(searchInput)
        navigate( searchUrl + input);
    
    };


  return (
      <>
      <Form
        style={{
          marginTop: "25px",
          marginLeft: "25px",
          marginRight: "25px",
          marginBottom: "25px"
        }}
      >
        <Search 
          placeholder="input search text" 
          onChange={(e) => setInput(e.target.value)} 
          onSearch={onSearch} 
          enterButton 
        />
      </Form>
    </>
  )
}

export default Search