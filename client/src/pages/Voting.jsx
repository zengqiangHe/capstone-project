import React from 'react';
import location_icon from '../assets/location_icon.png';
import clock_icon from '../assets/clock_icon.png';
import calendar_icon from '../assets/calendar_icon.png';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Voting({ events, setVotingConfirmation }) {
  const { _id } = useParams();

  const handleOnclickBockButton = (event) => {
    event.preventDefault();
    setVotingConfirmation(_id, true);
  };

  const handleOnclickWurstButton = (event) => {
    event.preventDefault();
    setVotingConfirmation(_id, false);
  };

  const event = events.find((event) => event._id === _id);
  if (event === undefined) {
    return <p>There is no vote.</p>;
  }

  return (
    <>
      <CardWrapper>
        <h2>{event.title}</h2>
        <p>{event.text}</p>
        <p>
          <img src={calendar_icon} alt="calendar icon" width="15" />
          {event.date}
        </p>
        <p>
          <img src={clock_icon} alt="time icon" width="15" />
          {event.time}
        </p>
        <p>
          <img src={location_icon} alt="location icon" width="15" />
          {event.location}
        </p>
      </CardWrapper>
      <ButtonWrapper>
        <BockButton onClick={handleOnclickBockButton}>Bock</BockButton>
        <WurstButton onClick={handleOnclickWurstButton}>Wurst</WurstButton>
      </ButtonWrapper>
    </>
  );
}
const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28rem;
  gap: 2rem;
  background-color: purple;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 0.5rem;
  &:hover {
    background-color: pink;
  }
`;

const ButtonWrapper = styled.li`
  display: flex;
  justify-content: space-evenly;
`;
const BockButton = styled.button`
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
const WurstButton = styled.button`
  display: block;
  width: 100px;
  font-size: 1em;
  color: #fff;
  padding: 8px 20px;
  border: 0;
  border-radius: 20px;
  background-color: red;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
`;
