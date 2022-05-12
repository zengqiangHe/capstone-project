import React from 'react';
import location_icon from '../assets/location_icon.png';
import clock_icon from '../assets/clock_icon.png';
import calendar_icon from '../assets/calendar_icon.png';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Voting({ events, setVotingConfirmation }) {
  const { _id } = useParams();

  const handleOnClickBockButton = (event) => {
    event.preventDefault();
    setVotingConfirmation(_id, true);
  };

  const handleOnClickWurstButton = (event) => {
    event.preventDefault();
    setVotingConfirmation(_id, false);
  };

  const event = events.find((event) => event._id === _id);
  if (!event) {
    return <p>Es gibt bisher noch keine BockWurst-Abstimmung.</p>;
  }

  return (
    <Wrapper>
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
        <BockButton onClick={handleOnClickBockButton}>BOCK</BockButton>
        <WurstButton onClick={handleOnClickWurstButton}>WURST</WurstButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
`;
const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28rem;
  gap: 2rem;
  background-color: #ffb72b;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 6rem 1.5rem 1rem;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;
// const IconsWrapper = styled.div`
// display:inline-block
// `;

const ButtonWrapper = styled.div`
  display: flex;
  align-content: center;
`;
const BockButton = styled.button`
  width: 100px;
  font-size: 1em;
  color: #fff;
  width: 120px;
  height: 50px;
  border: 0;
  border-radius: 18px;
  background-color: #019267;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
  &:hover {
    background-color: pink;
  }
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;
const WurstButton = styled.button`
  display: block;
  width: 100px;
  font-size: 1em;
  color: #fff;
  width: 120px;
  height: 50px;
  border: 0;
  border-radius: 18px;
  background-color: #f32424;
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;
