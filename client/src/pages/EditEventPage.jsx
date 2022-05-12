import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function EditEventPage({ events, updateEvent }) {
  const { id } = useParams();
  const event = events.find((event) => event._id === id);
  const [title, setTitle] = useState(event.title);
  const [text, setText] = useState(event.text);
  const [location, setLocation] = useState(event.location);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);

  const handleSubmit = (editEvent) => {
    editEvent.preventDefault();
    updateEvent({ title, text, date, time, location, _id: id, votes: event.votes });
  };
  return (
    <FormWrapper>
      <h2>Bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          <Span>Titel:</Span>
          <Input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
        </Label>

        <Label>
          <Span>Beschreibung:</Span>
          <Textarea onChange={(e) => setText(e.target.value)} value={text} required />
        </Label>

        <Label>
          <Span>Ort:</Span>
          <Input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />
        </Label>

        <Label>
          <Span>Datum:</Span>
          <Input type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
        </Label>

        <Label>
          <Span>Zeit:</Span>
          <Input type="time" onChange={(e) => setTime(e.target.value)} value={time} required />
        </Label>

        <Button>Erstellen</Button>
      </form>
    </FormWrapper>
  );
}
const FormWrapper = styled.div`
  display: block;
  color: white;
  margin: 100px 20px;
  padding-bottom: 0;
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
  background-color: green;
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
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
const Textarea = styled.textarea`
  height: 100px;
  border-radius: 15px;
  border: none;
  padding: 20px;
  background-color: white;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
