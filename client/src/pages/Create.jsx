import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Create({ addNewEvent }) {
  const [titel, setTitel] = useState('');
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewEvent({ titel, text, date, time, location });
  };
  return (
    <FormWrapper>
      <h2>Abstimmung erstellen</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          <span>Titel:</span>
          <input
            type="text"
            onChange={(event) => setTitel(event.target.value)}
            value={titel}
            required
          />
        </Label>

        <Label>
          <span>Beschreibung:</span>
          <textarea onChange={(event) => setText(event.target.value)} value={text} required />
        </Label>

        <Label>
          <Span>Ort:</Span>
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            required
          />
        </Label>

        <Label>
          <Span>Datum:</Span>
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
            required
          />
        </Label>

        <Label>
          <Span>Zeit:</Span>
          <input
            type="time"
            onChange={(event) => setTime(event.target.value)}
            value={time}
            required
          />
        </Label>

        <Button type="submit">Erstellen</Button>
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
const Span = styled.p`
  display: flex;
  margin: 30px 0 10px;
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
