import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Create({ addNewEvent }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewEvent({ title, text, date, time, location });
  };
  return (
    <FormWrapper>
      <h2>Abstimmung erstellen</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          <Span>Titel:</Span>
          <Input
            type="text"
            placeholder="Was ist der Anlass?"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            required
          />
        </Label>

        <Label>
          <Span>Beschreibung:</Span>
          <Textarea
            placeholder="Hier kannst du gerne die Anweisungen oder andere Details hinzufügen."
            onChange={(event) => setText(event.target.value)}
            value={text}
            required
          />
        </Label>

        <Label>
          <Span>Ort:</Span>
          <Input
            type="text"
            placeholder="Wo findet es statt?"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            required
          />
        </Label>

        <Label>
          <Span>Datum:</Span>
          <Input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
            required
          />
        </Label>

        <Label>
          <Span>Zeit:</Span>
          <Input
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
  color: white;
  margin: 100px 20px;
  padding-bottom: 0;
  height:110vh;
`;
const Label = styled.label`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px 30px 10px;
  border-radius: 18px;
`;
const Span = styled.span`
  display: flex;
  margin: 0 0 10px;
`;
const Button = styled.button`
  display: block;
  width: 200px;
  font-size: 1em;
  color: #fff;
  padding: 15px 15px;
  border: 0;
  border-radius: 15px;
  background: linear-gradient(45deg, #00f260, #4ca2cd);
  cursor: pointer;
  text-decoration: none;
  margin: 30px auto;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
const Input = styled.input`
  height: 35px;
  text-align: center;
  border-radius: 15px;
  border: none;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;
const Textarea = styled.textarea`
  height: 100px;
  border-radius: 15px;
  border: none;
  padding: 20px;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;
