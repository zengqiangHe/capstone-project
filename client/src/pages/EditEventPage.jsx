import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function EditEventPage({ events, updateEvent }) {
  const { id } = useParams();
  const event = events.find(event => event.id === id);
  const [title, setTitle] = useState(event.title);
  const [text, setText] = useState(event.text);
  const [location, setLocation] = useState(event.location);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);

  const handleSubmit = event => {
    event.preventDefault();
    updateEvent({ title, text, date, time, location, id });
  };
  return (
    <FormWrapper>
      <h2>Bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          <Span>Titel:</Span>
          <input type="text" onChange={e => setTitle(e.target.value)} value={title} required />
        </Label>

        <Label>
          <Span>Beschreibung:</Span>
          <textarea onChange={e => setText(e.target.value)} value={text} required />
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
  max-width: 480px;
  diplay: block;
  color: darkgreen;
`;
const Label = styled.p`
  color: red;
  display: block;
  margin: 30px 0 10px;
`;
const Span = styled.p`
  display: block;
  margin: 30px 0 10px;
`;
const Button = styled.button`
  display: block;
  width: 100px;
  font-size: 1em;
  color: #fff;
  padding: 8px 20px;
  border: 0;
  border-radius: 4px;
  background-color: green;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
`;
