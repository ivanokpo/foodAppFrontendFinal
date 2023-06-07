import React from 'react'
//import styled from 'styled-components';
import {useState} from 'react';
//import {FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {  Form, Input} from 'antd';


function Search() {

    const [input, setInput] = useState<string | null>("");
    const navigate = useNavigate();
    const baseUrl = '/recipes/searched/';
   
    // const submitHandler = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     navigate( baseUrl + input);
    //     setInput("")
    // };

    const { Search } = Input;
    const onSearch = (value: string) => {
      const searchInput = value.toLowerCase()
        setInput(searchInput)
        console.log(searchInput)
        navigate( baseUrl + input);

    
    };


  return (
      <>
      <Form
      //onFinish={submitHandler}
      style={{
        marginTop: "25px",
          marginLeft: "25px",
          marginRight: "25px",
          marginBottom: "25px"

      }}
      >
      <Search placeholder="input search text" onChange={(e) => setInput(e.target.value)} onSearch={onSearch} enterButton />


      </Form>
    {/* <FormStyle onSubmit={submitHandler}>
        <Border>
            
            <input onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input!}
            />
            <FaSearch />
        </Border>
            
    </FormStyle> */}
    </>
  )
}

// const Border = styled.div`
//     display: flex;
//     justify-content: center;
    
//     margin: 3rem 10rem;
// `

// const FormStyle = styled.form`
//     margin: 0rem 0rem;
//     position: relative;
//     bottom: 1px;
//     width: 100%;
//     justify-content: center;
    
//     input {
//         border: none;
//         background: linear-gradient(35deg, #494949, #313131);
//         font-size: 1.5rem;
//         color: white;
//         padding: 1rem 3rem;
//         border: none;
//         border-radius: 1rem;
//         outline: none;
//         width: 100%;
        
//     }

//     svg {
//         position: relative;
//         margin-top: 20px;
//         right: 3%;
        
//         color: white;
//     }
// `

export default Search