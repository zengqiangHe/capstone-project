import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePageTabs() {
  return (
    <Wrapper>
      <StyledNavLink to="/">Anstehend</StyledNavLink>
      <StyledNavLink to="/erstellte-events">Erstellte Events</StyledNavLink>
    </Wrapper>
  );
}
const Wrapper = styled.ul`
  display: flex;
  justify-content:space-evenly;
  
`;
const StyledNavLink = styled(NavLink)`
  font-size: 1em;
  color: #fff;
  padding: 8px 20px;
  border: 0;
  border-radius: 4px;
  background-color: black;
  cursor: pointer;
  text-decoration: none;
  margin-top: 80px;
  margin-bottom:15px;
  
`;
