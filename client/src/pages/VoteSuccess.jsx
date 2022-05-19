import React from 'react';
import styled from 'styled-components';
import check_icon from '../assets/check_icon.png';
import { NavLink } from 'react-router-dom';

export default function VoteSuccess() {
  return (
    <Wrapper>
      <TextWrapper>
        <SuccessIcon src={check_icon} alt="check icon" />
        <h2>
          Vielen Dank! <br />
          Deine Abstimmung wurde versendet.
        </h2>
        <HomeLink to="/">Zurück zur Startseite</HomeLink>
      </TextWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 80vh;
  text-align: center;
`;
const TextWrapper = styled.div`
  margin: 100px 30px;
  disply: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  line-height: 60px;
  font-size: 1rem;
  background: linear-gradient(45deg, #24c6dc, #514a9d);
  border-radius: 2rem;
  padding: 1.5rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;
const HomeLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 250px;
  margin-top: 30px;
  font-size: 1em;
  color: #fff;
  text-align: center;
  border: 0;
  border-radius: 15px;
  background-color: green;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(45deg, #1d976c, #93f9b9);
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
const SuccessIcon = styled.img`
  height: 70px;
`;
