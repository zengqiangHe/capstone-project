import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Create() {
  const [titel, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(titel, description, location, date, time);
  };
  return (
    <FormWrapper>
      <h2>Abstimmung erstellen</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          <Span>Titel:</Span>
          <input type="text" onChange={e => setTitle(e.target.value)} value={titel} required />
        </Label>

        <Label>
          <Span>Beschreibung:</Span>
          <textarea onChange={e => setDescription(e.target.value)} value={description} required />
        </Label>

        <Label>
          <Span>Ort:</Span>
          <input
            type="text"
            onChange={e => setLocation(e.target.value)}
            value={location}
            required
          />
        </Label>

        <Label>
          <Span>Datum:</Span>
          <input type="date" onChange={e => setDate(e.target.value)} value={date} required />
        </Label>

        <Label>
          <Span>Zeit:</Span>
          <input type="time" onChange={e => setTime(e.target.value)} value={time} required />
        </Label>

        <Button>Erstellen</Button>
      </form>
    </FormWrapper>
  );
}
const FormWrapper = styled.div`
  margin: 60 auto;
 max-width:480px;
 diplay:block;
 color:darkgreen;
 
`;
const Label =styled.p`
color:red;
display:block;
margin:30px 0 10px;
`
const Span =styled.p`
display:block;
margin:30px 0 10px;
`
const Button = styled.button`
display:block;
width:100px;
font-size:1em;
color:#fff;
padding: 8px 20px;
border:0;
border-radius:4px;
background-color:green;
cursor: pointer;
text-decoration:none;
margin:20px auto;
`
