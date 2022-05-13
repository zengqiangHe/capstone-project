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
          <Input
            type="text"
            placeholder="Dein Name"
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
  display: flex;
  flex-direction: column;
  color: #f8f5f1;
  height: 100vh;
  margin: 200px 40px;
`;
const Label = styled.p`
  color: black;
  display: flex;
  justify-content: center;
  margin: 50px 0 10px;
`;
const Button = styled.button`
  display: block;
  width: 150px;
  font-size: 1em;
  color: #fff;
  padding: 8px 20px;
  border: 0;
  border-radius: 20px;
  background-color: green;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
const Input = styled.input`
  height: 60px;
  width: 250px;
  text-align: center;
  border-radius: 15px;
  border: none;
  margin-bottom: 50px;
  background-color: white;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
