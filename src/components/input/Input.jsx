import React, { useState } from 'react';
import uuid from "react-uuid";
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;

  & label {
    min-width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  & input,
  & button {
    font-family: "Quicksand", sans-serif;
    height: 3rem;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const UserInput = styled.input`
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
`;

const Button = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: rgb(65, 65, 65);
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  transform: background 0.2s ease-out;

  &:hover {
    background: rgba(65, 65, 65, 0.5);
  }
`;

const Input = ({ createTodo }) => {
    const [input, setInput] = useState([{ task: '' }])
    
    const handleChange = (event) => {
        setInput({ [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (input.task) {
            const newTodo = { id: uuid(), task: input.task, completed: false };
            createTodo(newTodo);
            setInput({ task: "" });
        }
    };

    return (
      <Form onSubmit={handleSubmit}>
        <UserInput
          value={input.task}
          onChange={handleChange}
          id="task"
          type="text"
          name="task"
          placeholder="New todo..."
        />
        <Button>Add Todo</Button>
      </Form>
    );
}

export default Input;