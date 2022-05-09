import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function NamePrompt({ addName }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addName(name);
  };

  return (
    <FormWrapper>
      <h2>Gib bitte dein Name ein</h2>

      <form onSubmit={handleSubmit}>
        <Label>
          <span>Dein Name:</span>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
        </Label>

        <Button type="submit">Weiter</Button>
      </form>
    </FormWrapper>
  );
}
const FormWrapper = styled.div`
  display: block;
  color: black;
  margin: 30px;
  height: 100vh;
`;
const Label = styled.p`
  color: black;
  display: flex;
  justify-content: center;
  margin: 50px 0 10px;
`;
const Button = styled.button`
  display: block;
  width: 100px;
  font-size: 1em;
  color: #fff;
  padding: 8px 20px;
  border: 0;
  border-radius: 20px;
  background-color: green;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
`;
