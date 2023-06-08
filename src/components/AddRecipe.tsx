import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Form, Input, Radio, RadioChangeEvent} from 'antd';
import { Alert } from 'antd';


//method for creating new recipe, called in the cookbook page
const AddRecipe = ({backendUrl}: {backendUrl: any}) =>  {
  //state for different sections of the form
  const [title, setTitle] = useState<string | null>("");
  const [dishType, setDishType] = useState<string | null>("");
  const [instructions, setInstructions] = useState<string | null>("");
  const [ingredients, setIngredients] = useState<string | null>("");
  const recipe = {title, dishType, instructions, ingredients};
  
  //text area instantiatd as an input from ant design
  const { TextArea } = Input;

  //state for when the form is submitted
  const [submitted,setSubmitted] = useState<string | null >('no');
  
  //state for different options in radio dish type input
  const dishOptions = [
    { label: 'Soup', value: 'soup' },
    { label: 'Burgers', value: 'burgers' },
    { label: 'Noodles', value: 'noodles' },
    { label: 'Rice', value: 'rice' },
    { label: 'Pasta', value: 'pasta' },
    { label: 'Baked', value: 'orange' }
  ];

  
  //onChange methods for radio input
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setDishType(value);
  };

  //method used for when form is not completed and submitted
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  //method for when form is submitted
  const handleSubmit = (/*e*/) => {
    setSubmitted('yes')  
    //connect to backend via post http request, adding new recipe to database
    fetch(backendUrl + '/add', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(recipe)
    }).then(() => {
      console.log(JSON.stringify(recipe).slice(1,-1))})
  }

  return (
    <>
    <FormStyle>
    <h1>Add a new recipe to your cookbook</h1>
    <p> Join Thousands of users in creating your own virtual sous-chef</p>
    </FormStyle>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: '75%',
      marginTop: '3%',
    }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size='large'
  >
    <Form.Item
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Please input the title of your recipe' }]}
    >
      <Input 
        value={title!}
        onChange={e => setTitle(e.target.value)}      
      />
    </Form.Item>

    <Form.Item
      label="Dish Type"
      name="dish type"
      rules={[{ required: true, message: 'Please the dish type' }]}
      
    >
      <Radio.Group options={dishOptions} onChange={onChange} value={dishType!} />
    </Form.Item>

    <Form.Item
      label="Instructions"
      name="instructions"
      rules={[{ required: true, message: 'Please input the instructions' }]}  
    >
      <TextArea rows={4} 
        value={instructions!} onChange={e => setInstructions(e.target.value)}
      />
    </Form.Item>

    <Form.Item
      label="Ingredients"
      name="ingredients"
      rules={[{ required: true, message: 'Please input the ingredients' }]}
    >
      <TextArea rows={4} 
        value={ingredients!} onChange={e => setIngredients(e.target.value)}
      />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" style={{ background: "green"}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
    {
    submitted === 'yes' ? (<Alert message="Recipe added!" type="success" />) : (console.log('not submitted'))
    }
    </>
  )
}
const FormStyle = styled.form`
    
position: relative;
  text-align: center;
  margin-top: 3%;
    h1 {
      color: rgb(83,83,83);
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
      padding: 0.5rem 0rem;
      
    }
    
    
`



export default AddRecipe;