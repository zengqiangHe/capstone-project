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
          <Icon src={calendar_icon} alt="calendar icon" />
          {event.date}
        </p>

        <p>
          <Icon src={clock_icon} alt="time icon" />
          {event.time}
        </p>

        <p>
          <Icon src={location_icon} alt="location icon" />
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
  height: 73vh;
`;
const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25rem;
  gap: 1.5rem;
  line-height: 1.8rem;
  background: linear-gradient(45deg, #fc00ff, #00dbde);
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 8rem 1.5rem 1rem;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;

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
  background: linear-gradient(45deg, #11998e, #38ef7d);
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
  background: linear-gradient(45deg, #ee0979, #ff6a00);
  cursor: pointer;
  text-decoration: none;
  margin: 20px auto;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;
const Icon = styled.img`
  width: 15px;
  margin-right: 10px;
`;
