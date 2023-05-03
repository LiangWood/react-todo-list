import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;

  & input,
  & button {
    font-family: "Quicksand", sans-serif;
    height: 1.5rem;
  }

  & input {
    max-width: 50%;
  } 
  
  & button {
    border: none;
    font-size: 1em;
    margin: 0.3em;
    background: none;
    cursor: pointer;
    color: #fff;
  }
`;

const Search = ({ search }) => {
    const [value, setValue] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        search(value);
    };

    const handleChange = (event) => { 
       setValue(event.target.value);
    };

    return (
      <Form onSubmit={handleSearch}>
        <input onChange={handleChange} type="text" />
        <button>
          <i className="fas fa-search" />
        </button>
      </Form>
    );
};

export default Search;